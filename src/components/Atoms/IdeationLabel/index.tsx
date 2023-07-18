import React from "react";

import { Label } from "./styles";

function IdeationLabel({
  isColorful = false,
}: {
  isColorful?: boolean;
}): React.ReactElement {
  return (
    <Label colorful={isColorful ? "true" : "false"}>
      {isColorful ? "LET'S PLAY\nIDEATION !" : "LET'S\nMAKE\nIDEATION !"}
    </Label>
  );
}

export default IdeationLabel;
