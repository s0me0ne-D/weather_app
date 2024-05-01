import React from "react";
import { MoreVertIcon } from "../../../../assets/icons/MoreVertIcon";
import "./options.scss";
import { OptionsItems } from "./OptionsItems";

export const Options = () => {
	return (
		<div className="options">
			<button className="options_btn">
				<MoreVertIcon />
			</button>
			<OptionsItems />
		</div>
	);
};
