import { ResultType } from "../../types/types";
import styled from "@emotion/styled";

const ResultsItemWrapper = styled.div(() => ({
  padding: "10px",
  display: "grid",
  gridTemplateColumns: "1fr 4fr 1fr",
  backgroundColor: "rgb(250, 250, 255)",
}));

type PropsType = {
  result: ResultType;
  index: number;
};

const ResultItem = ({ result, index }: PropsType): JSX.Element => {
  if (result) {
    return (
      <ResultsItemWrapper>
        <span>{index + 1}</span>
        <span>You answered {result.percentageResult}% of the words</span>
        <span>{result.date}</span>
      </ResultsItemWrapper>
    );
  } else {
    return <span>...error</span>;
  }
};

export default ResultItem;
