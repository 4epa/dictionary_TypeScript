import { RootState } from "../store";

const getWords = (state: RootState) => {
  return state.dictionary.words;
};

export { getWords };
