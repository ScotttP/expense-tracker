import { render, screen, cleanup, userEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { create } from "react-test-renderer";
import App from "./App";
import firebaseAuth from "./App";

// test("renders learn react link", () => {
// 	render(<App />);
// 	const linkElement = screen.getByText(/learn react/i);
// 	expect(linkElement).toBeInTheDocument();
// });

const renderWithRouter = (ui, { route = "/" } = {}) => {
	window.history.pushState({}, "Test page", route);

	return render(ui, { wrapper: MemoryRouter });
};

afterEach(cleanup);

test("currentUser is not undefined in the application", () => {
	expect(firebaseAuth.currentUser !== undefined);
});

describe("snapshot test", () => {
	test("app snapshot", () => {
		let tree = create(<App />);
		expect(tree.toJSON()).toMatchSnapshot();
	});
});

describe("route rendering test", () => {
	test("components in App render Signup Route", () => {
		renderWithRouter(<App />, { route: "/SignUp" });
		expect(screen.getByTestId("loginSignUpFormHeader")).toBeInTheDocument();
	});
	test("components in App render Login Route", () => {
		renderWithRouter(<App />, { route: "/Login" });
		expect(screen.getByTestId("loginSignUpFormHeader")).toBeInTheDocument();
	});
	test("components in App render Dashboard route", () => {
		renderWithRouter(<App />, { route: "/Dashboard" });
		expect(screen.getByTestId("loginSignUpFormHeader")).toBeInTheDocument();
		firebaseAuth.currentUser = "hi";
		expect(screen.getByText(/Hi I'm the Dashboard/i)).toBeInTheDocument();
	});
	test("components in App render History route", () => {
		renderWithRouter(<App />, { route: "/History" });
		expect(screen.getByTestId("loginSignUpFormHeader")).toBeInTheDocument();
		firebaseAuth.currentUser = "hi";
		expect(screen.getByText(/Hi I'm the History/i)).toBeInTheDocument();
	});
	test("components in App render Account route", () => {
		renderWithRouter(<App />, { route: "/Account" });
		expect(screen.getByTestId("loginSignUpFormHeader")).toBeInTheDocument();
		firebaseAuth.currentUser = "hi";
		expect(screen.getByTestId("accountRouteTest")).toBeInTheDocument();
	});
}//https://medium.com/@the_teacher/how-to-test-redirect-from-react-router-with-rtl-react-test-library-and-jest-242eced1c6b8
