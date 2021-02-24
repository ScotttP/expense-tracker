import React, { useEffect, useState } from "react";
import ExpenseCategory from "./ExpenseCategory";
import uniqid from "uniqid";

const ExpensesList = () => {
	const [categoryArray, setCategoryArray] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setCategoryArray([0, 1]); //mimicks call to firebase
		}, 2000);
		setCategoryArray([0]);
	}, []);

	return (
		<div>
			<div>
				<b>Expense Categories</b>
				<button onClick={() => console.log("add category")}>+</button>
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
