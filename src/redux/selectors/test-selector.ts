import { RootState } from "../store";

const getResult = (state: RootState) => {
  return state.test.result;
};

const getTestIsStarted = (state: RootState) => {
  return state.test.testIsStarted;
};

export { getResult, getTestIsStarted  };
