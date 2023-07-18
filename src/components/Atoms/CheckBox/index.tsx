import React from "react";

import { Check } from "./styles";

function CheckBox({ isChecked }: { isChecked: boolean }): React.ReactElement {
  return (
    <div>
      <Check isChecked={isChecked} />
    </div>
  );
}

export default CheckBox;
