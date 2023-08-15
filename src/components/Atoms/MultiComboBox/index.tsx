import React, { Dispatch, SetStateAction } from "react";

import { StyledComboBox, StyledTextField } from "./styles";

function ComboBox({
  placeholder,
  options,
  value,
  setValue,
  width,
}: {
  placeholder: string;
  options: string[];
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
  width?: number;
}): React.ReactElement {
  return (
    <StyledComboBox
      onChange={(e: React.SyntheticEvent, value: unknown) => {
        setValue(value as string[]);
      }}
      multiple
      disableClearable={true}
      id="tags-outlined"
      options={options ? options : []}
      filterSelectedOptions
      renderInput={(params) => (
        <StyledTextField {...params} placeholder={placeholder} />
      )}
      width={width ? width : 0}
    />
  );
}

export default ComboBox;
