import React, { useState } from "react";
import { CitySearch } from "../../../components/CitySearch";
import { GeolocationSearch } from "../../../components/GeolocationSearch";
import { MapBtn } from "../components/buttons/MapBtn";
import { BurgerMenu } from "./BurgerMenu";
import "./header.scss";

interface HeaderProps {
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ onClick }: HeaderProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	console.log(isOpen);
	return (
		<header className="header">
			<BurgerMenu isOpen={isOpen} onClick={setIsOpen} />
			<div className={`header_items ${isOpen && "isActive"}`}>
				<CitySearch closeBurger={setIsOpen} burgerState={isOpen} />
				<GeolocationSearch closeBurger={setIsOpen} burgerState={isOpen} />
			</div>
			<MapBtn onClick={onClick} closeBurger={setIsOpen} burgerState={isOpen} />
		</header>
	);
};
