import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Contact from "../components/Contact/Contact";

describe("Contact", () => {
  it("offers a mailto link that opens the user's mail client directly", () => {
    render(<Contact />);

    const email = screen.getByRole("link", { name: "kjartan1@live.com" });
    expect(email).toHaveAttribute("href", "mailto:kjartan1@live.com");
    // A mailto must not open a blank tab — that leaves an empty window behind.
    expect(email).not.toHaveAttribute("target");
  });

  it("links the real GitHub and LinkedIn profiles", () => {
    render(<Contact />);

    expect(
      screen.getByRole("link", { name: /github\.com\/kjartanandersen/i })
    ).toHaveAttribute("href", "https://github.com/kjartanandersen");

    expect(
      screen.getByRole("link", { name: /linkedin\.com\/in\/kjartanmarandersen/i })
    ).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/kjartanmarandersen/"
    );
  });

  it("opens profile links in a new tab without leaking the referrer", () => {
    render(<Contact />);

    for (const name of [/github/i, /linkedin/i]) {
      const link = screen.getByRole("link", { name });
      expect(link).toHaveAttribute("target", "_blank");
      expect(link.getAttribute("rel")).toMatch(/noreferrer/);
    }
  });

  it("labels each channel", () => {
    render(<Contact />);

    for (const label of ["Email", "GitHub", "LinkedIn"]) {
      expect(screen.getByText(label)).toBeInTheDocument();
    }
  });
});
