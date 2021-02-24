import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import uniqid from "uniqid";

const ExpenseCategory = () => {
	const [itemArray, setItemArray] = useState([0, 1]);

	return (
		<div>
			<b>Bills</b>
			<div>
				<ul>
					{itemArray.map((element) => {
						return <ExpenseItem key={uniqid()} />;
					})}
				</ul>
			</div>
		</div>
	);
};

export default ExpenseCategory;
