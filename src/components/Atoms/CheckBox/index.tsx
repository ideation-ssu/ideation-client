import React from "react";

import { Check } from "./styles";

function CheckBox({
  check,
  setCheck,
}: {
  check: boolean;
  setCheck: () => void;
}): React.ReactElement {
  return (
    <div>
      <Check isChecked={check} onClick={setCheck} />
    </div>
  );
}

export default CheckBox;
