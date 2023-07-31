import React from "react";

import { StyledComboBox, StyledTextField } from "./styles";

function ComboBox({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}): React.ReactElement {
  return (
    <StyledComboBox
      disablePortal
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <StyledTextField {...params} placeholder={placeholder} />
      )}
    />
  );
}

export default ComboBox;
