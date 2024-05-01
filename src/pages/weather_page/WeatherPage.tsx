import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { Popup } from "../../components/Popup";
import { Header } from "./header/Header";
import { useState } from "react";
import { Main } from "./main/Main";
import "./weatherPage.scss";

export const WeatherPage = () => {
	const [isMap, setIsMap] = useState<boolean>(false);
	const { error, isLoading, locationExist, isSuccess, isConfirmation } = useSelector(
		(store: RootStore) => store.popupReducer
	);
	return (
		<div className="weather">
			<Header onClick={setIsMap} />
			<Main isMap={isMap} />
			{error.isError || isLoading || locationExist || isSuccess || isConfirmation ? (
				<Popup />
			) : null}
		</div>
	);
};
