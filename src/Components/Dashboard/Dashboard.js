import React from "react";
import GoalsVsActual from "./GoalsVsActual";
import ExpensesList from "./ExpensesList";

const Dashboard = () => {
	return (
		<div id="dashboard" data-testid="dashboard">
			<p>Month: February, 2021</p>
			<GoalsVsActual />
			<ExpensesList />
		</div>
	);
};

export default Dashboard;
