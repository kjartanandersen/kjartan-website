import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import ApprovedPageBase from "../components/ApprovedPageBase";

function renderBase(pullUp?: boolean) {
  return render(
    <MemoryRouter>
      <ApprovedPageBase pullUp={pullUp}>
        <div>CHILD CONTENT</div>
      </ApprovedPageBase>
    </MemoryRouter>
  );
}

describe("ApprovedPageBase", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders the chrome bar", () => {
    renderBase();

    expect(screen.getByText("127.0.0.1")).toBeInTheDocument();
    expect(screen.getByText("CPU Usage")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Disconnect" })).toHaveAttribute(
      "href",
      "/"
    );
  });

  it("renders its children", () => {
    renderBase();
    expect(screen.getByText("CHILD CONTENT")).toBeInTheDocument();
  });

  it("renders the footer contact links", () => {
    renderBase();

    expect(screen.getByText("Kjartan Már Andersen")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "kjartan1@live.com" })
    ).toHaveAttribute("href", "mailto:kjartan1@live.com");
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      "https://github.com/kjartanandersen"
    );
    expect(screen.getByRole("link", { name: "LinkedIn" })).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/kjartanmarandersen/"
    );
  });

  it("pulls content up by default", () => {
    const { container } = renderBase();
    expect(container.querySelector(".childComponent")).toBeInTheDocument();
    expect(
      container.querySelector(".childComponentFlush")
    ).not.toBeInTheDocument();
  });

  it("renders content flush when pullUp is false", () => {
    const { container } = renderBase(false);
    expect(container.querySelector(".childComponentFlush")).toBeInTheDocument();
    expect(container.querySelector(".childComponent")).not.toBeInTheDocument();
  });
});
