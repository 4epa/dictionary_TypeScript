import styled from "@emotion/styled";
import IconButton from "@mui/material/IconButton";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { deleteWord } from "../../redux/slices/dictionary-slice";
import { useAppDispatch } from "../../redux/redux-hooks/redux-hooks";
import { WordType } from "../../types/types";

const WordContainer = styled.div(() => ({
  display: "grid",
  gridTemplateColumns: "1fr 3fr 3fr 0.5fr",
  padding: "10px",
  borderBottom: "1px solid rgb(230, 230, 255)",
  backgroundColor: "rgb(250, 250, 255)",
  cursor: "pointer",
  alignItems: "center",
  transition: "all 0.2s ease 0s",

  ":hover": {
    backgroundColor: "#fff",
    "& div": {
      opacity: "1",
    },
  },
}));

const ButtonContainer = styled.div(() => ({
  display: "flex",
  opacity: "0",
  transition: "all 0.2s ease 0s",
}));

type PropsType = {
  word: WordType;
  index: number;
};

const Word = ({ word, index }: PropsType): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = (): void => {
    dispatch(deleteWord(word.word));
  };

  return (
    <WordContainer key={word.word}>
      <span>{index + 1}</span>
      <span>{word.word}</span>
      <span>{word.translate}</span>
      <ButtonContainer>
        <IconButton onClick={handleClick} sx={{ padding: "2px" }}>
          <DeleteForeverIcon sx={{ color: "#1976d2", fontSize: "1.25rem" }} />
        </IconButton>
      </ButtonContainer>
    </WordContainer>
  );
};

export default Word;
