import React from "react";

import { Card, StyledDriver, Text } from "./styles";

function TitleCard({
  children,
  titleText,
}: {
  children: React.ReactNode;
  titleText: string;
}): React.ReactElement {
  return (
    <Card>
      <Text>{titleText}</Text>
      <StyledDriver />
      {children}
    </Card>
  );
}

export default TitleCard;
