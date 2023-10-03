import React from "react";

import Avatar from "@/components/Atoms/Avatar";
import { User } from "@/interfaces/user";

import { UserGroup } from "./styles";

function AvatarGroup({
  users,
  max,
  width = 40,
  height = 40,
}: {
  users: User[];
  max: number;
  width?: number;
  height?: number;
}): React.ReactElement {
  return (
    <UserGroup max={max} src={users.length > 2 ? users[1].profileImage : ""}>
      {users.map((user, index) => {
        return (
          <Avatar
            src={user.profileImage}
            key={index}
            width={width}
            height={height}
          />
        );
      })}
    </UserGroup>
  );
}

export default AvatarGroup;
