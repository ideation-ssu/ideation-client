import React from "react";

import { StyledAvatar } from "./styles";

function Avatar({
  src,
  width = 40,
  height = 40,
}: {
  src: string;
  width?: number;
  height?: number;
}): React.ReactElement {
  return <StyledAvatar src={src} width={width} height={height} />;
}

export default Avatar;
