import React, { useState } from "react";
import { CitySearch } from "../../../components/CitySearch";
import { GeolocationSearch } from "../../../components/GeolocationSearch";
import { MapBtn } from "../components/buttons/MapBtn";
import { BurgerMenu } from "./BurgerMenu";

interface HeaderProps {
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ onClick }: HeaderProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<header className="weather_header">
			<BurgerMenu isOpen={isOpen} onClick={setIsOpen} />
			<CitySearch />
			<GeolocationSearch />
			<MapBtn onClick={onClick} />
		</header>
	);
};
