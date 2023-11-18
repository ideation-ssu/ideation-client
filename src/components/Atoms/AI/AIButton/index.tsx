import React, { useState } from "react";

import { AIBotIcon, IconBtn, SpeechBubble } from "./styles";

function AIButton({
  onClick,
}: {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}): React.ReactElement {
  const [showSpeech, setShowSpeech] = useState<boolean>(false);

  const handleMouse = (isShow: boolean) => {
    setShowSpeech(isShow);
    console.log(isShow);
  };

  return (
    <>
      <IconBtn
        onClick={onClick}
        onMouseOver={() => handleMouse(true)}
        onMouseOut={() => handleMouse(false)}
      >
        <AIBotIcon />
      </IconBtn>
      {showSpeech && (
        <SpeechBubble>AI 늘려쓰기를 사용하려면 여길 눌러봐!</SpeechBubble>
      )}
    </>
  );
}

export default AIButton;
