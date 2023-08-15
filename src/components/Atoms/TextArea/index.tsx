import React, { Dispatch, SetStateAction } from "react";

import { StyledTextArea } from "./styles";

function TextArea({
  placeholder,
  text,
  setText,
}: {
  placeholder: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}): React.ReactElement {
  return (
    <StyledTextArea
      placeholder={placeholder}
      value={text}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
}

export default TextArea;
