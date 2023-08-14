import React, { Dispatch, SetStateAction } from "react";

import { Container, RadioButton } from "./styles";

function RadioGroup({
  options,
  selectedVal,
  setSelectedVal,
}: {
  options: string[];
  selectedVal: string;
  setSelectedVal: Dispatch<SetStateAction<string>>;
}): React.ReactElement {
  return (
    <Container>
      {options.map((item, index) => {
        return (
          <RadioButton
            key={index}
            isSelected={selectedVal === item}
            onClick={() => {
              setSelectedVal(item);
            }}
          >
            {item}
          </RadioButton>
        );
      })}
    </Container>
  );
}

export default RadioGroup;
