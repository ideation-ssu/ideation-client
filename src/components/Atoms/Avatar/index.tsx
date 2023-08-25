import React from "react";

import { StyledAvatar } from "./styles";

function Avatar({ src }: { src: string }): React.ReactElement {
  return <StyledAvatar src={src ? src : "/broken-image.jpg"} />;
}

export default Avatar;
