import React from "react";

import Driver from "@/components/Atoms/Driver";

import { Card, Text } from "./styles";

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
      <Driver />
      {children}
    </Card>
  );
}

export default TitleCard;
