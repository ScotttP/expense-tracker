import React from "react";
import Dashboard from "./Dashboard";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);
	return render(ui, { wrapper: MemoryRouter });
};

describe("Dasboard tests", () => {
	it("should render the dashboard page along with components", () => {
		renderWithRouter(<Dashboard />, { route: "/Dashboard" });

		expect(screen.getByTestId("Dashboard")).toBeInTheDocument();
		expect(screen.getByTestId("GoalsVsActual")).toBeInTheDocument();
		expect(screen.getByTestId("ExpensesList")).toBeInTheDocument();
	});
});
