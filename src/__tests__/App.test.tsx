import React from "react";
import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

/**
 * App-level composition. The previous version of this test branched on
 * UNDER_MAINTENANCE and asserted the "Under Construction" page, which the
 * current App no longer renders — that flag now only affects AppOld.
 */
describe("App", () => {
  it("renders every top-level section", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { level: 1, name: /I build the systems/i })
    ).toBeInTheDocument();

    for (const title of [
      "Background",
      "Selected projects",
      "What I work with",
      "Get in touch",
    ]) {
      expect(
        screen.getByRole("heading", { level: 2, name: title })
      ).toBeInTheDocument();
    }
  });

  it("gives every in-page nav link a matching section to land on", () => {
    const { container } = render(<App />);

    const inPageLinks = Array.from(
      container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    );

    // Guards against a nav item pointing at a section id that was renamed.
    expect(inPageLinks.length).toBeGreaterThan(0);

    for (const link of inPageLinks) {
      const targetId = link.getAttribute("href")!.slice(1);
      expect(container.querySelector(`#${targetId}`)).not.toBeNull();
    }
  });

  it("exposes a skip link to the main content", () => {
    const { container } = render(<App />);

    const skipLink = screen.getByRole("link", { name: /skip to content/i });
    expect(skipLink).toHaveAttribute("href", "#main");
    expect(container.querySelector("#main")).not.toBeNull();
  });

  it("opens every external link safely in a new tab", () => {
    const { container } = render(<App />);

    const externalLinks = Array.from(
      container.querySelectorAll<HTMLAnchorElement>('a[href^="http"]')
    );

    expect(externalLinks.length).toBeGreaterThan(0);

    for (const link of externalLinks) {
      expect(link).toHaveAttribute("target", "_blank");
      // Stops the opened page reaching back through window.opener.
      expect(link.getAttribute("rel")).toMatch(/noreferrer/);
    }
  });

  it("names the site owner in the footer", () => {
    render(<App />);

    const footer = screen.getByRole("contentinfo");
    expect(
      within(footer).getByText(
        new RegExp(`${new Date().getFullYear()} Kjartan Már Andersen`)
      )
    ).toBeInTheDocument();
  });
});
