import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSwiper } from "swiper/react";
import { RootStore } from "../../../redux/store";

export const MoveToSlide = () => {
	const { index } = useSelector((store: RootStore) => store.activeLocationIndexReducer);

	const swipe = useSwiper();

	useEffect(() => {
		swipe.slideTo(index);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index]);

	return null;
};
