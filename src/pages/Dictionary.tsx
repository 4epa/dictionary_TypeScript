import styled from "@emotion/styled";
import { getWords } from "../redux/selectors/dictionary-selector";
import Word from "../component/Word/Word";
import Sorry from "../component/Sorry/Sorry";
import { useAppSelector } from "../redux/redux-hooks/redux-hooks";

const DictionaryWrapper = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
}));

const DictionaryContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "10px 0px",
  maxWidth: "500px",
  boxShadow: "1px 1px 10px rgba(30, 30, 225, 0.15)",
  minHeight: "580px",
}));

const DictionaryDescription = styled.div(() => ({
  padding: "10px 10px 20px 10px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  borderBottom: "2px solid #1976d2",
}));

const DictionaryTitle = styled.h2(() => ({
  color: "#1976d2",
  fontSize: "1.875rem",
}));

const DictionaryText = styled.h2(() => ({
  color: "#1976d2",
  fontSize: "1rem",
}));

const DictionaryHeader = styled.header(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 3fr 3fr 0.5fr",
  padding: "10px",
  borderBottom: "1px solid rgb(230, 230, 255)",
}));

const Dictionary = () => {
  const words = useAppSelector((state) => getWords(state));

  return (
    <DictionaryWrapper>
      <DictionaryContainer>
        <DictionaryDescription>
          <DictionaryTitle>Dictionary</DictionaryTitle>
          <DictionaryText>
            Here you can view the added words and learn them
          </DictionaryText>
        </DictionaryDescription>
        <DictionaryHeader>
          <span>№</span>
          <span>word</span>
          <span>translate</span>
        </DictionaryHeader>
        {words.length > 0 ? (
          words.map((word, index): JSX.Element => {
            return <Word word={word} index={index} key={word.word} />;
          })
        ) : (
          <Sorry
            text={"Sorry, you don't have words. Please add new"}
            buttonText={"Add word"}
            navigateTo={"new-word"}
          />
        )}
      </DictionaryContainer>
    </DictionaryWrapper>
  );
};

export default Dictionary;
