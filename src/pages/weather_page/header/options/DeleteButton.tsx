import React from "react";
import { DeleteIcon } from "../../../../assets/icons/DeleteIcon";
import "./deleteButton.scss";

export const DeleteButton = () => {
	return (
		<button className="options_button delete-button">
			<span>Delete</span>
			<DeleteIcon />
		</button>
	);
};
