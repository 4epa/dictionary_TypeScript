import styled from "@emotion/styled";
import Sorry from "../component/Sorry/Sorry";
import { useAppSelector } from "../redux/redux-hooks/redux-hooks";
import ResultItem from "../component/ResultItem/ResultItem";

const ResultsWrapper = styled.div(() => ({
  padding: "10px",
}));

const ResultsContainer = styled.div(() => ({
  backgroundColor: "#fff",
  padding: "10px 0px",
  display: "flex",
  flexDirection: "column",
  borderRadius: "5px",
  minHeight: "580px",
}));

const ResultsHeader = styled.header(() => ({
  padding: "10px",
  display: "grid",
  gridTemplateColumns: "1fr 4fr 1fr",
  borderBottom: "2px solid #1976d2",
}));

const Result = () => {
  const results = useAppSelector((state) => state.results.results);

  return (
    <ResultsWrapper>
      <ResultsContainer>
        <ResultsHeader>
          <span>№</span>
          <span>Result</span>
          <span>date</span>
        </ResultsHeader>
        {results.length > 0 ? (
          results.map(
            (result, index): JSX.Element => (
              <ResultItem result={result} index={index} />
            )
          )
        ) : (
          <Sorry
            text={"Sorry, but you have not passed any test"}
            buttonText={"Go to test"}
            navigateTo={"test"}
          />
        )}
      </ResultsContainer>
    </ResultsWrapper>
  );
};

export default Result;
