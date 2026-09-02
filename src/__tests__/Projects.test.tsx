import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Projects from "../components/ProjectsV2/Projects";
import { projects } from "../Db/data";

describe("Projects", () => {
  it("lists every project with its year and context", () => {
    render(<Projects />);

    for (const project of projects) {
      expect(
        screen.getByRole("heading", { level: 3, name: project.title })
      ).toBeInTheDocument();
      expect(screen.getByText(project.context)).toBeInTheDocument();
      expect(screen.getByText(project.year)).toBeInTheDocument();
    }
  });

  it("shows the short summary up front", () => {
    render(<Projects />);

    for (const project of projects) {
      expect(screen.getByText(project.summary)).toBeInTheDocument();
    }
  });

  it("keeps the long description collapsed until asked for", () => {
    render(<Projects />);

    // <details> renders its content into the DOM either way, so assert on the
    // element's open state rather than on text visibility.
    const disclosures = screen.getAllByText("Technical detail");
    expect(disclosures).toHaveLength(projects.length);

    for (const disclosure of disclosures) {
      expect(disclosure.closest("details")).not.toHaveAttribute("open");
    }
  });

  it("reveals the technical detail when the disclosure is activated", async () => {
    const user = userEvent.setup();
    render(<Projects />);

    const first = screen.getAllByText("Technical detail")[0];
    const details = first.closest("details")!;

    await user.click(first);

    expect(details).toHaveAttribute("open");
    expect(within(details).getByText(projects[0].description)).toBeInTheDocument();
  });

  it("credits the author's own role where one is recorded", () => {
    render(<Projects />);

    const withRole = projects.filter((project) => project.role);
    expect(withRole.length).toBeGreaterThan(0);

    expect(screen.getAllByText("My role")).toHaveLength(withRole.length);

    for (const project of withRole) {
      expect(screen.getByText(project.role!)).toBeInTheDocument();
    }
  });

  it("renders each project's tech stack", () => {
    render(<Projects />);

    for (const project of projects) {
      for (const tech of project.techStack) {
        expect(screen.getAllByText(tech).length).toBeGreaterThan(0);
      }
    }
  });

  it("wires every project link to its recorded URL", () => {
    const { container } = render(<Projects />);

    // Scoped per project: labels such as "Play on itch.io" appear on more than
    // one entry, so a document-wide query would match several anchors.
    const rows = Array.from(container.querySelectorAll<HTMLElement>("ol > li"));
    expect(rows).toHaveLength(projects.length);

    projects.forEach((project, index) => {
      const row = within(rows[index]);

      for (const link of project.links) {
        const anchor = row.getByRole("link", {
          name: new RegExp(link.label, "i"),
        });
        expect(anchor).toHaveAttribute("href", link.url);
        expect(anchor).toHaveAttribute("target", "_blank");
        expect(anchor.getAttribute("rel")).toMatch(/noreferrer/);
      }
    });
  });

  it("orders projects newest first", () => {
    render(<Projects />);

    const headings = screen
      .getAllByRole("heading", { level: 3 })
      .map((heading) => heading.textContent);

    expect(headings).toEqual(projects.map((project) => project.title));

    // The year rail only carries meaning if the list really is chronological.
    const startYears = projects.map((project) =>
      Number(project.year.slice(0, 4))
    );
    const descending = [...startYears].sort((a, b) => b - a);
    expect(startYears).toEqual(descending);
  });
});
