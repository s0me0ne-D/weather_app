import React from "react";
import { DeleteButton } from "./DeleteButton";

export const OptionsItems = ({ closeOptions }: { closeOptions: () => void }) => {
	return (
		<div className="options_items">
			<DeleteButton closeOptions={closeOptions} />
		</div>
	);
};
