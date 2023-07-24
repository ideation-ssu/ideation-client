import React, { ChangeEvent } from "react";

import ErrorMsg from "@/components/Atoms/ErrorMsg";

import { Container, Input } from "./styles";

function InputBox({
  placeHolder,
  text,
  setText,
  errText,
  fontSize = 10,
}: {
  placeHolder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  errText?: string;
  fontSize?: number;
}): React.ReactElement {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <Input
        placeholder={placeHolder}
        variant="standard"
        value={text}
        onChange={handleChange}
        error={!!errText}
        fontsize={fontSize}
      />
      {errText && <ErrorMsg errText={errText} />}
    </Container>
  );
}

export default InputBox;
