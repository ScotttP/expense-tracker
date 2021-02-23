import React from "react";
import Account from "./Account";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);
	return render(ui, { wrapper: MemoryRouter });
};
describe("Dasboard tests", () => {
	it("should render the Account page", () => {
		renderWithRouter(<Account />, { route: "/Account" });
		expect(screen.getByTestId("account")).toBeInTheDocument();
	});
});
