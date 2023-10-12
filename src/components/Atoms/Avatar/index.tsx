import React from "react";

import { StyledAvatar, StyledBadge, UserName } from "./styles";

function Avatar({
  src,
  width = 40,
  height = 40,
  onClick,
  isEditMode = false,
  showHoverName = false,
  userName = "",
}: {
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
  isEditMode?: boolean;
  showHoverName?: boolean;
  userName?: string;
}): React.ReactElement {
  return (
    <StyledBadge
      overlap="circular"
      badgeContent={showHoverName ? <UserName>{userName}</UserName> : <></>}
    >
      <StyledAvatar
        src={src}
        width={width}
        height={height}
        onClick={onClick}
        edit={isEditMode ? "true" : "false"}
      />
    </StyledBadge>
  );
}

export default Avatar;
