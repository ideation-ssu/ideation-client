import React, { ChangeEvent } from "react";

import { Input } from "./styles";

function OutlineInputBox({
  placeHolder,
  text,
  setText,
}: {
  placeHolder: string;
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
}): React.ReactElement {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <Input
      placeholder={placeHolder}
      variant="outlined"
      value={text}
      onChange={handleChange}
    />
  );
}

export default OutlineInputBox;
