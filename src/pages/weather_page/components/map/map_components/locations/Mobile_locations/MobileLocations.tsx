import React, { useContext, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../../../../redux/store";
import { locationsContext } from "../../../../../../../App";
import { Location } from "../Location";
import "./mobileLocations.scss";
import { useOutsideClick } from "../../../../../../../hooks/useOutsideClick";

export const MobileLocations = () => {
	const { locations } = useContext(locationsContext);
	const { index: activeLocationIndex } = useSelector(
		(store: RootStore) => store.activeLocationIndexReducer
	);

	const [isOpen, setIsOpen] = useState(false);
	const currentLocationRef = useRef(null);
	const itemsRef = useOutsideClick(() => {
		isOpen && setIsOpen(false);
	}, currentLocationRef);

	return (
		<div className="mobile-locations">
			<div ref={currentLocationRef}>
				<Location location={locations[activeLocationIndex]} openMobileList={setIsOpen} />
			</div>
			{isOpen && (
				<div ref={itemsRef} className="mobile-locations_items">
					<div className="mobile-locations_items_container">
						{locations.map((location, index) => (
							<Location
								location={location}
								index={index}
								openMobileList={setIsOpen}
								key={location}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};
