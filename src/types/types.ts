export type WordType = {
  word: string;
  translate: string;
};

export type ResultType = {
  correctAnswer: number;
  percentageResult: number;
  date: string;
} | null;

export type WordsType = Array<WordType>