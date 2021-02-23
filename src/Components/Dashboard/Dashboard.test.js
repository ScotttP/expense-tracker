import React from "react";
import Dashboard from "./Dashboard";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);
	return render(ui, { wrapper: MemoryRouter });
};
describe("Dasboard tests", () => {
	it("should render the dashboard page", () => {
		renderWithRouter(<Dashboard />, { route: "/Dashboard" });
		expect(screen.getByTestId("dashboard")).toBeInTheDocument();
	});
});
