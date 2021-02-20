import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarHeader = styled.header`
	display: flex;
	justify-content: space-between;
	background-color: grey;
	height: fit-content;
	position: sticky;
	top: 0;
	min-height: 80px;
	padding: 0 50px 0 50px;
	@media screen and (max-width: 750px) {
		display: block;
		min-height: 60px;
	}
`;

const NavbarLeft = styled.div`
	min-height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const NavbarList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	list-style: none;
	min-width: 40%;

	a {
		text-decoration: none;
		color: black;
	}
	@media screen and (max-width: 750px) {
		display: ${(props) => (props.display === "flex" ? "flex" : "none")};
		height: 100%;
		flex-direction: column;
	}
`;

const HamburgerSpan = styled.span`
	display: none;
	@media screen and (max-width: 750px) {
		display: block;
	}
`;

const Navbar = () => {
	const [display, setDisplay] = useState("none");
	console.log(display);
	return (
		<NavbarHeader>
			<NavbarLeft>
				<h1>Expense Tracker</h1>
				<HamburgerSpan
					onClick={() => {
						setDisplay((prevState) => {
							if (prevState === "none") return "flex";
							else return "none";
						});
					}}
				>
					<FontAwesomeIcon id="fontAwesomeIcon" icon={faBars}></FontAwesomeIcon>
				</HamburgerSpan>
			</NavbarLeft>

			<NavbarList id="Navbarlist" display={display}>
				<li>
					<Link to="/Dashboard">Dashboard</Link>
				</li>
				<li>
					<Link to="/History">History</Link>
				</li>
				<li>
					<Link to="/Account">Account</Link>
				</li>
			</NavbarList>
		</NavbarHeader>
	);
};

export default Navbar;
