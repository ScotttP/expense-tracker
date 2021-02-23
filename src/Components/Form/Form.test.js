import React from "react";
import Form from "./Form";
import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);
	return render(ui, { wrapper: MemoryRouter });
};

describe("Form tests", () => {
	it("login button fires off the function", () => {
		const click = jest.fn();
		const { getByTestId } = renderWithRouter(
			<Form formType="Login" loginWithEmail={click}></Form>
		);
		const loginButton = getByTestId("loginButton");
		fireEvent.click(loginButton);
		expect(click).toHaveBeenCalledTimes(1);
	});
	it("signup button fires off the function", () => {
		const click = jest.fn();
		const { getByTestId } = renderWithRouter(
			<Form formType="Sign Up" signUpWithEmail={click}></Form>
		);
		const signUpButton = getByTestId("signUpButton");
		fireEvent.click(signUpButton);
		expect(click).toHaveBeenCalledTimes(1);
	});
	it("google button fires off the function", () => {
		const click = jest.fn();
		const { getByTestId } = renderWithRouter(
			<Form formType="Login" loginWithGoogle={click}></Form>
		);
		const signUpButton = getByTestId("googleButton");
		fireEvent.click(signUpButton);
	});
});
