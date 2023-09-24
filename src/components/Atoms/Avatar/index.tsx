import React from "react";

import { StyledAvatar } from "./styles";

function Avatar({
  src,
  width = 40,
  height = 40,
  onClick,
  isEditMode = false,
}: {
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  isEditMode?: boolean;
}): React.ReactElement {
  return (
    <StyledAvatar
      src={src}
      width={width}
      height={height}
      onClick={onClick}
      edit={isEditMode ? "true" : "false"}
    />
  );
}

export default Avatar;
