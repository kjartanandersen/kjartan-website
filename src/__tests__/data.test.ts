import { projects, skillCategories } from "../Db/data";

/**
 * Content integrity.
 *
 * The site previously shipped scaffolding data — github.com/yourname links,
 * your.email@example.com, "© Your Name" — which is worse than an empty page
 * on a portfolio a recruiter is reading. These tests fail the build if any of
 * that creeps back in.
 */

const PLACEHOLDER_PATTERNS = [
  /yourname/i,
  /your[-.]?email/i,
  /your-website/i,
  /example\.com/i,
  /\bYour Name\b/,
  /lorem ipsum/i,
  /\bTODO\b/,
  /\bFIXME\b/,
  /\bTBD\b/,
];

describe("project data", () => {
  it("is not empty", () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it("contains no placeholder content anywhere", () => {
    const serialised = JSON.stringify({ projects, skillCategories });

    for (const pattern of PLACEHOLDER_PATTERNS) {
      expect(serialised).not.toMatch(pattern);
    }
  });

  it("gives every project the fields the UI renders", () => {
    for (const project of projects) {
      expect(project.id.trim()).not.toHaveLength(0);
      expect(project.title.trim()).not.toHaveLength(0);
      expect(project.context.trim()).not.toHaveLength(0);
      expect(project.year.trim()).not.toHaveLength(0);
      expect(project.summary.trim()).not.toHaveLength(0);
      expect(project.description.trim()).not.toHaveLength(0);
      expect(project.techStack.length).toBeGreaterThan(0);
      expect(project.links.length).toBeGreaterThan(0);
    }
  });

  it("keeps summaries short enough to stay scannable", () => {
    // The summary is the always-visible line; the long form lives in the
    // <details> disclosure. Letting it grow is what made the cards too tall.
    for (const project of projects) {
      expect(project.summary.length).toBeLessThanOrEqual(200);
    }
  });

  it("uses unique project ids", () => {
    const ids = projects.map((project) => project.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("points every link at a real, labelled destination", () => {
    for (const project of projects) {
      for (const link of project.links) {
        expect(link.label.trim()).not.toHaveLength(0);
        expect(link.url).toMatch(/^(https:\/\/|mailto:)/);
        expect(link.url).not.toMatch(/\s/);
      }
    }
  });

  it("does not list the same URL twice within one project", () => {
    for (const project of projects) {
      const urls = project.links.map((link) => link.url);
      expect(new Set(urls).size).toBe(urls.length);
    }
  });
});

describe("skill data", () => {
  it("gives every category at least one skill", () => {
    expect(skillCategories.length).toBeGreaterThan(0);

    for (const category of skillCategories) {
      expect(category.name.trim()).not.toHaveLength(0);
      expect(category.skills.length).toBeGreaterThan(0);
      expect(category.skills.every((skill) => skill.trim().length > 0)).toBe(
        true
      );
    }
  });

  it("uses unique category names", () => {
    const names = skillCategories.map((category) => category.name);
    expect(new Set(names).size).toBe(names.length);
  });
});
