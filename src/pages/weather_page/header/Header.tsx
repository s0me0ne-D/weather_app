import React, { LegacyRef, useRef, useState } from "react";
import { CitySearch } from "../../../components/CitySearch";
import { GeolocationSearch } from "../../../components/GeolocationSearch";
import { MapBtn } from "../components/buttons/MapBtn";
import { BurgerMenu } from "./BurgerMenu";
import "./header.scss";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { Options } from "./options/Options";

interface HeaderProps {
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({ onClick }: HeaderProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const burgerRef = useRef<HTMLButtonElement | null>(null);
	const headerItemsRef = useOutsideClick(() => setIsOpen(false), burgerRef);
	return (
		<header className="header">
			<Options />
			<div className="header_menu">
				<BurgerMenu ref={burgerRef} isOpen={isOpen} onClick={setIsOpen} />
				<div ref={headerItemsRef} className={`header_items ${isOpen && "isActive"}`}>
					<CitySearch closeBurger={setIsOpen} burgerState={isOpen} />
					<GeolocationSearch closeBurger={setIsOpen} burgerState={isOpen} />
				</div>
				<MapBtn onClick={onClick} />
			</div>
		</header>
	);
};
