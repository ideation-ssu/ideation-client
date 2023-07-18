import React from "react";

import { Input } from "./styles";

function RoundInputBox({
  placeHolder,
  text,
  setText,
}: {
  placeHolder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}): React.ReactElement {
  return <Input placeholder={placeHolder} variant="outlined" />;
}

export default RoundInputBox;
