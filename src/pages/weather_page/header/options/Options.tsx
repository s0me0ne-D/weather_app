import React, { useState } from "react";
import { MoreVertIcon } from "../../../../assets/icons/MoreVertIcon";
import "./options.scss";
import { OptionsItems } from "./OptionsItems";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";

export const Options = () => {
	const [showOptions, setShowOptions] = useState<boolean>(false);
	const optionsRef = useOutsideClick(() => setShowOptions(false));

	const handleCloseOptions = () => setShowOptions(false);

	return (
		<div className="options" ref={optionsRef}>
			<button
				className={`options_btn ${showOptions ? "active" : ""}`}
				onClick={() => setShowOptions((prev) => !prev)}
			>
				<MoreVertIcon />
			</button>
			{showOptions && <OptionsItems closeOptions={handleCloseOptions} />}
		</div>
	);
};
