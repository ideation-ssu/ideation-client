import React from "react";

import Avatar from "@/components/Atoms/Avatar";
import { User } from "@/interfaces/user";

import { AvatarWrapper, UserGroup, VoteHoverText } from "./styles";

function AvatarGroup({
  users,
  max,
  width = 40,
  height = 40,
  showHoverName = false,
}: {
  users: User[];
  max: number;
  width?: number;
  height?: number;
  showHoverName?: boolean;
}): React.ReactElement {
  return (
    <UserGroup
      max={max}
      src={users.length > 2 ? users[1].profileImage : ""}
      width={width}
      height={height}
    >
      {users.map((user, index) => {
        return (
          <AvatarWrapper key={index}>
            <Avatar src={user.profileImage} width={width} height={height} />
            {showHoverName && <VoteHoverText>{user.name}</VoteHoverText>}
          </AvatarWrapper>
        );
      })}
    </UserGroup>
  );
}

export default AvatarGroup;
