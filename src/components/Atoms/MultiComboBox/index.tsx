import React from "react";

import { StyledComboBox, StyledTextField } from "./styles";

function MultiComboBox({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}): React.ReactElement {
  return (
    <StyledComboBox
      multiple
      id="tags-outlined"
      options={options ? options : []}
      filterSelectedOptions
      renderInput={(params) => (
        <StyledTextField {...params} placeholder={placeholder} />
      )}
    />
  );
}

export default MultiComboBox;
