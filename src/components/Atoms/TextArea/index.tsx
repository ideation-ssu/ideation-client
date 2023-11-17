import React, { Dispatch, SetStateAction, useRef, useState } from "react";

import {
  AIIcon,
  ContextItem,
  ContextMenu,
  Progress,
  StyledTextArea,
} from "./styles";

function TextArea({
  placeholder,
  text,
  setText,
}: {
  placeholder: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}): React.ReactElement {
  const [showContextMenu, setShowContextMenu] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [dragText, setDragText] = useState<string>("");
  const [loading, setLoading] = useState(false);

  // const handleSelect = (e: React.MouseEvent<HTMLTextAreaElement>) => {
  //   if (textAreaRef.current) {
  //     const { selectionStart, selectionEnd } = textAreaRef.current;
  //     if (selectionStart !== selectionEnd) {
  //       setShowContextMenu(true);
  //       setPosition({
  //         top: e.nativeEvent.y,
  //         left: e.nativeEvent.x,
  //       });
  //       const draggedText = textAreaRef.current.value.substring(
  //         selectionStart,
  //         selectionEnd
  //       );
  //       setDragText(draggedText);
  //     } else {
  //       setShowContextMenu(false);
  //     }
  //   }
  // };

  return (
    <>
      {loading && <Progress color="secondary" />}
      <StyledTextArea
        ref={textAreaRef}
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        disabled={loading}
      />
      {/*{showContextMenu && (*/}
      {/*  <ContextMenu top={position.top} left={position.left}>*/}
      {/*    <ContextItem*/}
      {/*      onClick={() => {*/}
      {/*        setShowContextMenu(false);*/}
      {/*        getStretchedIdea();*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <AIIcon />*/}
      {/*    </ContextItem>*/}
      {/*  </ContextMenu>*/}
      {/*)}*/}
    </>
  );
}

export default TextArea;
