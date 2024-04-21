import React from "react";
import "./burgerMenu.scss";

interface BurgerMenu {
	isOpen: boolean;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu = ({ isOpen, onClick }: BurgerMenu) => {
	return (
		<button className={`burger-menu ${isOpen && "open"}`} onClick={() => onClick((prev) => !prev)}>
			<span></span>
			<span></span>
			<span></span>
		</button>
	);
};
