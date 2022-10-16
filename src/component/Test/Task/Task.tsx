import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/redux-hooks/redux-hooks";
import { getWords } from "../../../redux/selectors/dictionary-selector";
import {
  getRandomInt,
  getRandomValuesFromArray,
  shuffle,
} from "../../../utils/helpers";
import { HandleButtonClickType } from "../Test";
import { WordsType } from "../../../types/types";

const Question = styled.h3`
  font-size: 20px;
  color: #1976d2;
`;

type PropsType = {
  completeTasks: number;
  onClickButton: HandleButtonClickType;
};

type QuestionType = {
  word: string;
  questionOptions: Array<string>;
  rightAnswer: string;
};

const Task = ({ completeTasks, onClickButton }: PropsType) => {
  const words = useAppSelector((state) => getWords(state));
  const [question, setQuestion] = useState<QuestionType | null>(null);

  const newQuestion = (array: WordsType): QuestionType => {
    const index = getRandomInt(array.length);
    const randomWord = array[index];
    const copiedArray = array.map((object) => ({ ...object }));
    copiedArray.splice(index, 1);

    const questionOptions = shuffle([
      randomWord.translate,
      ...getRandomValuesFromArray(copiedArray, 3).map(
        (word): string => word.translate
      ),
    ]);

    const question = {
      word: randomWord.word,
      questionOptions: questionOptions,
      rightAnswer: randomWord.translate,
    };

    return question;
  };

  useEffect(() => {
    setQuestion(newQuestion(words));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickButton = (answer: string): void => {
    if (question) {
      onClickButton(answer, question.rightAnswer, 10);
      setQuestion(newQuestion(words));
    }
  };

  if (question === null) {
    return <div>..loading</div>;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <Question>
        {`${completeTasks + 1})`} Translate this word - {question.word}
      </Question>
      <Box sx={{ display: "flex", gap: "15px" }}>
        {question.questionOptions.map((option) => (
          <Button
            onClick={() => handleClickButton(option)}
            key={option}
            variant="contained"
          >
            {option}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Task;
