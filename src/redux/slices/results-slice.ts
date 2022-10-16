import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ResultType } from "../../types/types";

type InitialStateType = {
  results: Array<ResultType>;
};

const initialState: InitialStateType = {
  results: [],
};

export const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    setResults: (state, action: PayloadAction<ResultType>) => {
      state.results = [...state.results, action.payload];
    },
  },
});

export const { setResults } = resultsSlice.actions;

export default resultsSlice.reducer;
