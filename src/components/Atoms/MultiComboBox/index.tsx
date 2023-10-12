import React, { Dispatch, SetStateAction } from "react";

import { StyledComboBox, StyledTextField } from "./styles";

interface UserOption {
  id: string; // 또는 적절한 타입
  name: string;
}

function ComboBox({
  placeholder,
  options,
  value,
  setValue,
  width,
}: {
  placeholder: string;
  options: { id: number; name: string }[];
  value: { id: number; name: string }[];
  setValue: Dispatch<SetStateAction<{ id: number; name: string }[]>>;
  width?: number;
}): React.ReactElement {
  return (
    <StyledComboBox
      onChange={(e: React.SyntheticEvent, value: unknown) => {
        setValue(value as { id: number; name: string }[]);
      }}
      multiple
      disableClearable={true}
      id="tags-outlined"
      options={options}
      getOptionLabel={(option) => (option as { name: string }).name}
      filterSelectedOptions
      renderOption={(props, option) => {
        return (
          <li {...props} key={(option as { id: string }).id}>
            {(option as { name: string }).name}
          </li>
        );
      }}
      renderInput={(params) => (
        <StyledTextField {...params} placeholder={placeholder} />
      )}
      width={width ? width : 0}
    />
  );
}

export default ComboBox;
