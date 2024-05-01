import React, { useContext } from "react";
import { DeleteIcon } from "../../../../assets/icons/DeleteIcon";
import "./deleteButton.scss";
import { useDispatch } from "react-redux";
import { showConfirmation } from "../../../../redux/popupSlice";

export const DeleteButton = ({ closeOptions }: { closeOptions: () => void }) => {
	const dispatch = useDispatch();

	const handleOnClick = () => {
		dispatch(showConfirmation(true));
		closeOptions();
	};

	return (
		<button className="options_button delete-button" onClick={handleOnClick}>
			<span>Delete</span>
			<DeleteIcon />
		</button>
	);
};
