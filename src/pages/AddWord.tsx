import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { setWord } from "../redux/slices/dictionary-slice";
import { useAppDispatch } from "../redux/redux-hooks/redux-hooks";
import styled from "@emotion/styled";
import { checkString } from "../utils/helpers";

const DictionaryFormWrapper = styled.div(() => ({
  padding: "10px",
}));

const DictionaryForm = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  gap: "25px",
  maxWidth: "500px",
  backgroundColor: "#fff",
  borderRadius: "5px",
  boxShadow: "1px 1px 10px rgba(30, 30, 225, 0.15)",
}));

const DictionaryFormTitle = styled.h2(() => ({
  color: "#1976d2",
  fontSize: "1.875rem",
}));

const DictionaryFormText = styled.h2(() => ({
  color: "#1976d2",
  fontSize: "1rem",
}));

const AddWord = () => {
  const [wordInput, setWordInput] = useState("");
  const [translateInput, setTranslate] = useState("");

  const dispatch = useAppDispatch();

  const handleChangeWorld = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setWordInput(event.currentTarget.value);
  };

  const handleChangeTranslate = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTranslate(event.currentTarget.value);
  };

  const addWord = (): void => {
    setWordInput("");
    setTranslate("");
    dispatch(setWord({ word: wordInput, translate: translateInput }));
  };

  const checkFields = (): boolean => {
    if (checkString(wordInput) || checkString(translateInput)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <DictionaryFormWrapper>
      <DictionaryForm>
        <DictionaryFormTitle>Adding new words</DictionaryFormTitle>
        <DictionaryFormText>
          To add a word, enter the word and its translation
        </DictionaryFormText>
        <TextField
          onChange={handleChangeWorld}
          value={wordInput}
          id="word"
          label="word"
          variant="outlined"
          size="small"
        />
        <TextField
          onChange={handleChangeTranslate}
          value={translateInput}
          id="translate"
          label="translate"
          variant="outlined"
          size="small"
        />
        <Button
          disabled={checkFields()}
          sx={{ fontSize: "16px" }}
          onClick={() => addWord()}
          variant="contained"
        >
          Add word
        </Button>
      </DictionaryForm>
    </DictionaryFormWrapper>
  );
};

export default AddWord;
