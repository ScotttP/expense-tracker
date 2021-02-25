import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ExpensesList from "./ExpensesList";

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);
	return render(ui, { wrapper: MemoryRouter });
};

describe("Expenses List Test", () => {
	it("add category button should click", () => {
		const click = jest.fn();
		const { getByTestId } = renderWithRouter(
			<ExpensesList addExpenseCategory={click}></ExpensesList>
		);
		const addCategoryButton = getByTestId("AddCategoryButton");
		fireEvent.click(addCategoryButton);
		expect(click).toHaveBeenCalledTimes(1);
		expect(addCategoryButton).toBeInTheDocument();
	});
});
