import React from "react";

import { AIBotIcon, IconBtn, SpeechBubble } from "./styles";

function AIButton({
  onClick,
}: {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}): React.ReactElement {
  return (
    <>
      <IconBtn onClick={onClick}>
        <AIBotIcon />
      </IconBtn>
      <SpeechBubble>AI 늘려쓰기를 사용하려면 여길 눌러봐!</SpeechBubble>
    </>
  );
}

export default AIButton;
