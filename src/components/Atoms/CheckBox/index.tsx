import React from "react";

import { Check } from "./styles";

function CheckBox({ isChecked }: { isChecked: boolean }): React.ReactElement {
  return (
    <div>
      <Check />
    </div>
  );
}

export default CheckBox;
