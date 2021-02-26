import React, { useEffect, useState } from "react";
import ExpenseCategory from "../ExpenseCategory";
import uniqid from "uniqid";

const ExpensesList = (props) => {
	const [categoryArray, setCategoryArray] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setCategoryArray([0]); //mimicks call to firebase
		}, 2000);
	}, []);

	return (
		<div data-testid="ExpensesList">
			<div>
				<b>Expense Categories</b>
				<button
					data-testid="AddCategoryButton"
					onClick={() => props.addExpenseCategory()}
				>
					+
				</button>
			</div>
			<div>
				<label htmlFor="ExpenseCategoryName"></label>
				<input
					type="text"
					name="ExpenseCategoryName"
					placeholder="Utilities"
				></input>
				<button>Add</button>
			</div>
			<div>
				<ul>
					{categoryArray.map((element) => {
						return <ExpenseCategory key={uniqid()} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default ExpensesList;
