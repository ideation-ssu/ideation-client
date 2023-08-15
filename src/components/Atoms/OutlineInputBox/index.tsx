import React, { ChangeEvent, KeyboardEvent, KeyboardEventHandler } from "react";

import ErrorMsg from "@/components/Atoms/ErrorMsg";

import { Container, Input } from "./styles";

function OutlineInputBox({
  isNormal = false,
  placeHolder,
  text,
  setText,
  errText,
  autoComplete,
  onKeyUp,
}: {
  isNormal?: boolean;
  placeHolder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  errText?: string;
  autoComplete: string;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
}): React.ReactElement {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <Input
        placeholder={placeHolder}
        variant="outlined"
        value={text}
        autoComplete={autoComplete}
        onChange={handleChange}
        error={!!errText}
        normal={isNormal ? "true" : "false"}
        onKeyUp={onKeyUp}
      />
      {errText && <ErrorMsg errText={errText} />}
    </Container>
  );
}

export default OutlineInputBox;
