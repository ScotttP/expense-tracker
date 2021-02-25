import React from "react";
import GoalsVsActual from "./GoalsVsActual";
import ExpensesList from "./ExpensesList/ExpensesList";

const Dashboard = () => {
	const addExpenseCategory = () => {
		console.log("add expense category");
	};

	return (
		<div data-testid="Dashboard">
			<p>Month: February, 2021</p>
			<GoalsVsActual />
			<ExpensesList addExpenseCategory={addExpenseCategory} />
		</div>
	);
};

export default Dashboard;
