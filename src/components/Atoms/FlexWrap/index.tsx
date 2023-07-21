import React from "react";

import { Flex } from "./styles";

function FlexWrap({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap: number;
}): React.ReactElement {
  return <Flex gap={gap}>{children}</Flex>;
}

export default FlexWrap;
