import React from "react";

import Avatar from "@/components/Atoms/Avatar";
import { User } from "@/interfaces/user";

import { UserGroup } from "./styles";

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
          <Avatar
            src={user.profileImage}
            width={width}
            height={height}
            key={index}
            showHoverName={showHoverName}
            userName={user.name}
          />
        );
      })}
    </UserGroup>
  );
}

export default AvatarGroup;
