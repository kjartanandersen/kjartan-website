#!/usr/bin/env bash
#
# Run a CircleCI job locally in Docker, using the legacy CircleCI CLI.
#
# Usage:
#   scripts/ci-local.sh [job-name]      # default job: test-app
#
# On Windows this MUST be run from inside WSL2 (Ubuntu) with Docker Desktop's
# WSL integration enabled, because the native Windows CircleCI binary cannot
# drive Docker. From Windows you can launch it with:
#
#   wsl -d Ubuntu bash scripts/ci-local.sh
#
# Requirements inside WSL:
#   - Docker Desktop running, with WSL integration enabled for this distro
#   - The legacy CircleCI CLI (v0.1.x, which has `local execute`) on PATH as
#     `circleci`  (the new v1.x CLI removed local execution)
#
# Notes:
#   - `local execute` runs a SINGLE job. There is no caching, no workflow, and
#     none of your CircleCI-cloud env vars/contexts. The cache steps report
#     "not supported" and are skipped — that is expected.
#   - Don't run `build-and-deploy-app` here: it deploys to Netlify and needs
#     real secrets. Stick to `test-app` (the default).
set -euo pipefail

JOB="${1:-test-app}"

# Must run in a Linux environment (WSL2 or native Linux), not Git Bash/MSYS.
case "$(uname -s)" in
  Linux) : ;;
  *)
    echo "error: run this from inside WSL2 (Ubuntu), e.g.:" >&2
    echo "  wsl -d Ubuntu bash scripts/ci-local.sh ${JOB}" >&2
    exit 1
    ;;
esac

# When launched as a non-login shell (e.g. `wsl -d Ubuntu bash scripts/ci-local.sh`),
# ~/.bashrc/~/.profile are not sourced, so ~/bin (where the CLI lives) is not on
# PATH. Add it here so the script works regardless of how it is invoked.
export PATH="${HOME}/bin:${PATH}"

# Resolve the repo root (the directory that holds .circleci/config.yml).
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
cd "${REPO_ROOT}"

CONFIG=".circleci/config.yml"

if [ ! -f "${CONFIG}" ]; then
  echo "error: ${CONFIG} not found (are you in the project?)" >&2
  exit 1
fi

if ! command -v circleci >/dev/null 2>&1; then
  echo "error: 'circleci' CLI not found on PATH." >&2
  echo "Install the legacy CLI (v0.1.x) into ~/bin and ensure it is on PATH." >&2
  exit 127
fi

# Guard against the new v1.x CLI, which has no local execution.
if ! circleci local execute --help >/dev/null 2>&1; then
  echo "error: this 'circleci' has no 'local execute' (it's the new v1.x CLI)." >&2
  echo "Install the legacy v0.1.x CLI as ~/bin/circleci instead." >&2
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "error: cannot reach Docker. Is Docker Desktop running with WSL" >&2
  echo "integration enabled for this distro?" >&2
  exit 1
fi

# `local execute` needs a flattened (2.0) config; process the 2.1 config first.
PROCESSED="$(mktemp)"
trap 'rm -f "${PROCESSED}"' EXIT

echo ">> Processing ${CONFIG} ..."
circleci config process "${CONFIG}" > "${PROCESSED}"

echo ">> Running job '${JOB}' locally in Docker ..."
circleci local execute -c "${PROCESSED}" "${JOB}"
