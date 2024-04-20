import { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../../../redux/store";
import { useGetForecastByCityQuery } from "../../../../../../redux/api";
import { locationsContext } from "../../../../../../App";
import { useMap } from "react-leaflet";

export const ResetCenterView = () => {
	const { locations } = useContext(locationsContext);
	const { index } = useSelector((store: RootStore) => store.activeLocationIndexReducer);
	const { data } = useGetForecastByCityQuery(locations[index]);

	const map = useMap();
	useEffect(() => {
		data && map.flyTo({ lat: data.latitude, lng: data.longitude }, 10);
	}, [data, map]);

	return null;
};
