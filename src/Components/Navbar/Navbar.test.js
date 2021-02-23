import React from "react";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);
	return render(ui, { wrapper: MemoryRouter });
};

it("should render the home page", () => {
	renderWithRouter(<Navbar />, { route: "/Login" });
	expect(screen.getByTestId("loginLink")).toBeInTheDocument();
});
