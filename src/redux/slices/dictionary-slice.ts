import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { WordType, WordsType } from "../../types/types";

type InitialStateType = {
  words: WordsType
};

const initialState: InitialStateType = {
  words: [
    {
      word: "dog",
      translate: "Пес",
    },
    {
      word: "cat",
      translate: "Кіт",
    },
    {
      word: "street",
      translate: "вулиця",
    },
    {
      word: "city",
      translate: "місто",
    },
    {
      word: "country",
      translate: "країна",
    },
    {
      word: "money",
      translate: "гроші",
    },
    {
      word: "example",
      translate: "приклад",
    },
    {
      word: "mouse",
      translate: "миша",
    },
    {
      word: "car",
      translate: "машина",
    },
    {
      word: "dictionary",
      translate: "словник",
    },
  ],
};

export const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    setWord: (state, action: PayloadAction<WordType>) => {
      state.words.push(action.payload);
    },
    deleteWord: (state, action: PayloadAction<string>) => {
      state.words = state.words.filter((word) => word.word !== action.payload);
    },
  },
});

export const { setWord, deleteWord } = dictionarySlice.actions;

export default dictionarySlice.reducer;
