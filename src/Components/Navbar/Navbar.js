import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavbarHeader = styled.header`
	display: flex;
	justify-content: space-between;
	background-color: #3030bd;
	color: #ffff;
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
	h1 {
		font-size: 1.2em;
	}
`;

const NavbarList = styled.ul`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	list-style: none;
	min-width: 20%;
	max-width: 410px;

	a {
		text-decoration: none;
		color: #ffff;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		width: 100%;
	}
	li {
		height: 100%;
		width: 100%;
		margin: 0 10px 0 10px;
		@media screen and (max-width: 750px) {
			margin: 10px 0 10px 0;
		}
	}
	@media screen and (max-width: 750px) {
		display: ${(props) => (props.display === "flex" ? "flex" : "none")};
		height: 100%;
		flex-direction: column;
	}
`;

const HamburgerSpan = styled.span`
	display: none;
	font-size: 1.5em;
	@media screen and (max-width: 750px) {
		display: block;
	}
	&:hover {
		cursor: pointer;
	}
`;

const Navbar = (props) => {
	const [display, setDisplay] = useState("none");

	return (
		<NavbarHeader data-testid="navbar">
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
					{display === "none" ? (
						<FontAwesomeIcon
							id="fontAwesomeIcon"
							icon={faBars}
						></FontAwesomeIcon>
					) : (
						<FontAwesomeIcon
							id="fontAwesomeIcon"
							icon={faTimes}
						></FontAwesomeIcon>
					)}
				</HamburgerSpan>
			</NavbarLeft>

			<NavbarList id="Navbarlist" display={display}>
				{props.currentUser ? (
					<>
						<li>
							<Link data-testid="dashboardLink" to="/Dashboard">
								Dashboard
							</Link>
						</li>
						<li>
							<Link data-testid="historyLink" to="/History">
								History
							</Link>
						</li>
						<li>
							<Link data-testid="accountLink" to="/Account">
								Account
							</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link data-testid="loginLink" to="/Login">
								Login
							</Link>
						</li>
						<li>
							<Link data-testid="signupLink" to="/SignUp">
								SignUp
							</Link>
						</li>
					</>
				)}
			</NavbarList>
		</NavbarHeader>
	);
};

export default Navbar;
