import React, { Dispatch, SetStateAction, useRef, useState } from "react";

import { useAuth } from "@/utils/auth";

import { ContextItem, ContextMenu, Progress, StyledTextArea } from "./styles";

function TextArea({
  placeholder,
  text,
  setText,
}: {
  placeholder: string;
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}): React.ReactElement {
  const { axios } = useAuth();

  const [showContextMenu, setShowContextMenu] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [dragText, setDragText] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSelect = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    if (textAreaRef.current) {
      const { selectionStart, selectionEnd } = textAreaRef.current;
      if (selectionStart !== selectionEnd) {
        setShowContextMenu(true);
        setPosition({
          top: e.nativeEvent.y,
          left: e.nativeEvent.x,
        });
        const draggedText = textAreaRef.current.value.substring(
          selectionStart,
          selectionEnd
        );
        setDragText(draggedText);
      } else {
        setShowContextMenu(false);
      }
    }
  };

  const getStretchedIdea = () => {
    setLoading(true);
    const data = {
      ideaName: dragText,
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_BASEURL}/idea/ai/stretch`, data)
      .then((res) => {
        setText(res.data.data.content);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
        onSelect={handleSelect}
        disabled={loading}
      />
      {showContextMenu && (
        <ContextMenu top={position.top} left={position.left}>
          <ContextItem
            onClick={() => {
              setShowContextMenu(false);
              getStretchedIdea();
            }}
          >
            {"AI로 늘려쓰기"}
          </ContextItem>
        </ContextMenu>
      )}
    </>
  );
}

export default TextArea;
