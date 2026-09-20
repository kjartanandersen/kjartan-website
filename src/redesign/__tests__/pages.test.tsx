import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Approved from "../pages/Approved";
import Portfolio from "../pages/Portfolio";
import Experience from "../pages/Experience";
import Education from "../pages/Education";
import Blog from "../pages/Blog";

import { projects } from "../../Db/data";
import { education, workExperiences } from "../data";

function renderPage(element: React.ReactElement) {
  return render(<MemoryRouter>{element}</MemoryRouter>);
}

// Every page except login is wrapped in ApprovedPageBase, which starts a clock
// interval; fake timers keep it from firing during assertions.
beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

describe("Approved landing page", () => {
  it("shows the About Me section and the section links", () => {
    renderPage(<Approved />);

    expect(
      screen.getByRole("heading", { name: "About Me" })
    ).toBeInTheDocument();

    const expected = [
      ["Portfolio", "/portfolio"],
      ["Experience", "/experience"],
      ["Education", "/education"],
      ["Blog", "/blog"],
    ] as const;

    for (const [label, href] of expected) {
      expect(screen.getByRole("link", { name: label })).toHaveAttribute(
        "href",
        href
      );
    }
  });
});

describe("Portfolio page", () => {
  it("renders every project with its links", () => {
    renderPage(<Portfolio />);

    expect(screen.getByRole("heading", { name: "Portfolio" })).toBeInTheDocument();

    for (const project of projects) {
      expect(
        screen.getByRole("heading", { name: project.title })
      ).toBeInTheDocument();

      for (const link of project.links) {
        const anchors = screen.getAllByRole("link", { name: link.label });
        expect(anchors.some((a) => a.getAttribute("href") === link.url)).toBe(
          true
        );
      }
    }
  });

  it("shows a back link to /approved", () => {
    renderPage(<Portfolio />);
    expect(screen.getByRole("link", { name: /Back/ })).toHaveAttribute(
      "href",
      "/approved"
    );
  });
});

describe("Experience page", () => {
  it("renders every role", () => {
    renderPage(<Experience />);

    for (const job of workExperiences) {
      expect(screen.getByText(job.occupation)).toBeInTheDocument();
    }
  });

  it("renders a logo only for entries that have one", () => {
    const { container } = renderPage(<Experience />);

    const withImage = workExperiences.filter((job) => job.image).length;
    expect(container.querySelectorAll(".entry img")).toHaveLength(withImage);
    // The N1 receptionist entry has no logo.
    expect(withImage).toBeLessThan(workExperiences.length);
  });
});

describe("Education page", () => {
  it("renders every qualification", () => {
    renderPage(<Education />);

    for (const entry of education) {
      expect(
        screen.getByRole("heading", { name: entry.subject })
      ).toBeInTheDocument();
    }
  });

  it("includes the web-development detail on the BSc entry", () => {
    renderPage(<Education />);
    expect(
      screen.getByText(/Studied web development with React/)
    ).toBeInTheDocument();
  });
});

describe("Blog page", () => {
  it("renders the heading and a placeholder message", () => {
    renderPage(<Blog />);

    expect(screen.getByRole("heading", { name: "Blog" })).toBeInTheDocument();
    expect(screen.getByText(/No entries have been logged yet/)).toBeInTheDocument();
  });
});
