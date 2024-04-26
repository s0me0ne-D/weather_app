import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = { index: 0 };

export const activeLocationIndexSlice = createSlice({
	name: "activeLocationIndex",
	initialState,
	reducers: {
		changeActiveLocationIndex: (state, action: PayloadAction<number>) => {
			state.index = action.payload;
		},
	},
});
export const activeLocationIndexReducer = activeLocationIndexSlice.reducer;
export const { changeActiveLocationIndex } = activeLocationIndexSlice.actions;
