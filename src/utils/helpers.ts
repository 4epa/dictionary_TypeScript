import { ResultType, WordType } from "../types/types";

const getRandomInt = (max: number): number => Math.floor(Math.random() * Math.floor(max));

const getRandomValuesFromArray = (array: Array<WordType>, number: number) => {
  let randomValues: Array<WordType> = [];

  while (randomValues.length !== number) {
    const index = getRandomInt(array.length);
    randomValues.push(array[index]);
    randomValues = randomValues.filter((v, i, arr) => {
      return arr.indexOf(v) === i;
    });
  }

  return randomValues;
};

const shuffle = (array: Array<any>) => {
  return array.sort(() => Math.random() - 0.5);
};

const getCurrentDate = (): string => {
  const date = new Date();

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const currentDate = `${day}-${month}-${year}`;

  return currentDate;
};

const calculationResult = (completeTasks: number, correctAnswer: number): ResultType => {

  return {
    correctAnswer: correctAnswer,
    percentageResult: (correctAnswer / completeTasks) * 100,
    date: getCurrentDate(),
  };
};

const checkString = (string: string): boolean => {
  if (string != null && typeof string !== "undefined") {
    string = string.trim();
  }

  if (!string) {
    return true;
  }

  return false;
};

export { getRandomInt, getRandomValuesFromArray, checkString, shuffle, getCurrentDate, calculationResult };
