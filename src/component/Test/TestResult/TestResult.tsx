import styled from "@emotion/styled";
import Button from "@mui/material/Button";
import { setResult, setTestIsStarted } from "../../../redux/slices/test-slice";
import { useAppDispatch } from "../../../redux/redux-hooks/redux-hooks";

const ResultContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  width: "100%",
}));

const ResultTitle = styled.h2(() => ({
  color: "#1976d2",
  fontSize: "1.875rem",
}));

const ResultText = styled.p(() => ({
  color: "#1976d2",

  "& span": {
    fontSize: "1.25rem",
    fontWeight: "700",
  },
}));

type PropsType = {
  result: number
}

const TestResult = ({ result }: PropsType) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setTestIsStarted(false));
    dispatch(setResult(null));
  };

  return (
    <ResultContainer>
      <ResultTitle>Your result</ResultTitle>
      <ResultText>
        You answered <span>{`${result}%`}</span> of the words correctly
      </ResultText>
      <Button onClick={handleClick} variant="contained">
        Go to back
      </Button>
    </ResultContainer>
  );
};

export default TestResult;
