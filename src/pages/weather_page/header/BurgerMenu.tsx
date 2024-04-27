import React, { LegacyRef, forwardRef } from "react";
import "./burgerMenu.scss";

interface BurgerMenu {
	isOpen: boolean;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BurgerMenu = forwardRef(
	({ isOpen, onClick }: BurgerMenu, ref: LegacyRef<HTMLButtonElement> | null) => {
		return (
			<button
				ref={ref}
				className={`burger-menu ${isOpen && "open"}`}
				onClick={() => onClick((prev) => !prev)}
			>
				<span></span>
				<span></span>
				<span></span>
			</button>
		);
	}
);
