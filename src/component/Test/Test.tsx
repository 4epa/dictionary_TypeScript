import Task from "./Task/Task";
import { useState, useEffect } from "react";
import { setResults } from "../../redux/slices/results-slice";
import {
  useAppDispatch,
  useAppSelector,
} from "../../redux/redux-hooks/redux-hooks";
import TestResult from "./TestResult/TestResult";
import { calculationResult } from "../../utils/helpers";
import { getResult } from "../../redux/selectors/test-selector";
import { setResult, setTestIsStarted } from "../../redux/slices/test-slice";
import styled from "@emotion/styled";

const TestContainer = styled.div((props) => ({
  padding: "10px",
}));

export type HandleButtonClickType = (
  answer: string,
  rightAnswer: string,
  amountTasks: number
) => void;

const Test = () => {
  const [completeTasks, setCompleteTasks] = useState(0);
  const [correctAnswers, setCorrectAnswer] = useState(0);
  const result = useAppSelector((state) => getResult(state));
  const dispatch = useAppDispatch();

  // Не ебу як правильно тут зробити тому "any"
  useEffect((): any => {
    dispatch(setTestIsStarted(true));
    return () => dispatch(setTestIsStarted(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAnswer = (answer: string, rightAnswer: string): void => {
    if (answer === rightAnswer) {
      setCorrectAnswer(correctAnswers + 1);
    }
  };

  const handleButtonClick: HandleButtonClickType = ( answer, rightAnswer, amountTasks ) => {
    const taskNumber = completeTasks + 1;

    setCompleteTasks(taskNumber);
    checkAnswer(answer, rightAnswer);

    if (taskNumber >= amountTasks) {
      const result = calculationResult(taskNumber, correctAnswers);
      dispatch(setResult(result));
      dispatch(setResults(result));
      setCorrectAnswer(0);
      setCompleteTasks(0);
    }
  };

  return (
    <TestContainer>
      {result !== null ? (
        <TestResult result={result.percentageResult} />
      ) : (
        <Task completeTasks={completeTasks} onClickButton={handleButtonClick} />
      )}
    </TestContainer>
  );
};

export default Test;
