import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";

function renderLogin() {
  return render(
    <MemoryRouter initialEntries={["/"]}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/approved" element={<div>APPROVED ROUTE</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe("Login page", () => {
  it("renders the header and the login fields", () => {
    renderLogin();

    expect(
      screen.getByRole("heading", { name: "Kjartan Már Andersen" })
    ).toBeInTheDocument();
    expect(screen.getByText("User authorisation required")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Code")).toBeInTheDocument();
  });

  it("navigates to /approved with the valid credentials", async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.type(screen.getByLabelText("Name"), "kjartanmar");
    await user.type(screen.getByLabelText("Code"), "mypass123");
    await user.click(screen.getByRole("button", { name: "Proceed" }));

    expect(await screen.findByText("APPROVED ROUTE")).toBeInTheDocument();
  });

  it("stays on the login page with wrong credentials", async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.type(screen.getByLabelText("Name"), "intruder");
    await user.type(screen.getByLabelText("Code"), "letmein");
    await user.click(screen.getByRole("button", { name: "Proceed" }));

    expect(screen.queryByText("APPROVED ROUTE")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Proceed" })).toBeInTheDocument();
  });

  it("auto-fills the credentials when the hint button is clicked", async () => {
    const user = userEvent.setup();
    renderLogin();

    await user.click(
      screen.getByRole("button", { name: /kjartanmar - mypass123/ })
    );

    await waitFor(() =>
      expect(screen.getByLabelText("Name")).toHaveValue("kjartanmar")
    );
    await waitFor(() =>
      expect(screen.getByLabelText("Code")).toHaveValue("mypass123")
    );
  });
});
