import React from "react";
import History from "./History";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);
	return render(ui, { wrapper: MemoryRouter });
};
describe("Dasboard tests", () => {
	it("should render the History page", () => {
		renderWithRouter(<History />, { route: "/History" });
		expect(screen.getByTestId("history")).toBeInTheDocument();
	});
});
