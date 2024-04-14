import React from "react";
import { CitySearch } from "../../../components/CitySearch";
import { GeolocationSearch } from "../../../components/GeolocationSearch";
import { MapBtn } from "../components/buttons/MapBtn";

interface HeaderProps {
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ onClick }: HeaderProps) => {
	return (
		<header className="weather_header">
			<CitySearch />
			<GeolocationSearch />
			<MapBtn onClick={onClick} />
		</header>
	);
};
