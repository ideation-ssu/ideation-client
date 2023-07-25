import React from "react";

import { Container, StyledSwitch } from "./styles";
function SwitchButton({
  checked,
  setChecked,
}: {
  checked: boolean;
  setChecked: (val: boolean) => void;
}): React.ReactElement {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <StyledSwitch
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "ant design" }}
      />
    </Container>
  );
}
export default SwitchButton;
