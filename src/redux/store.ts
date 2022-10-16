import { configureStore } from "@reduxjs/toolkit";
import dictionaryReducer from "./slices/dictionary-slice";
import resultsReducer from "./slices/results-slice";
import testReducer from "./slices/test-slice";

const store = configureStore({
  reducer: {
    dictionary: dictionaryReducer,
    results: resultsReducer,
    test: testReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
