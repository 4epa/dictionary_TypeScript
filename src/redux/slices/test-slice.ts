import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { ResultType } from "../../types/types";

type initialStateType = {
  testIsStarted: boolean;
  result: ResultType | null;
};

const initialState: initialStateType = {
  testIsStarted: false,
  result: null,
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<ResultType>) => {
      state.result = action.payload;
    },
    setTestIsStarted: (state, action: PayloadAction<boolean>) => {
      state.testIsStarted = action.payload;
    },
  },
});

export const { setTestIsStarted, setResult } = testSlice.actions;

export default testSlice.reducer;
