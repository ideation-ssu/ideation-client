import React from "react";

import { Input } from "./styles";

function InputBox({
  placeHolder,
  text,
  setText,
}: {
  placeHolder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}): React.ReactElement {
  return <Input placeholder={placeHolder} variant="standard" />;
}

export default InputBox;
