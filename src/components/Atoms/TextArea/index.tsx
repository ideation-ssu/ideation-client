import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { EventSourcePolyfill, NativeEventSource } from "event-source-polyfill";

import { useAuth } from "@/utils/auth";

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
  const { axios, token } = useAuth();

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
    if (!dragText) return;

    const eventSourceUrl = `${process.env.NEXT_PUBLIC_BASEURL}/idea/ai/stretch/stream?ideaName=${dragText}`;

    const eventSource = new EventSourcePolyfill(eventSourceUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    eventSource.addEventListener("open", (e) => {
      setText("");
      setLoading(true);
    });

    eventSource.addEventListener("message", (e) => {
      const jsonData = JSON.parse(e.data);
      const dataValue = jsonData.data;
      setText((prevText) => prevText + dataValue);
    });

    eventSource.addEventListener("error", (e) => {
      console.error("EventSource error:", e);
      setLoading(false);
      eventSource.close();
    });

    // fetch(eventSourceUrl, {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     content: dragText,
    //   }),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
    //     // 성공한 경우 EventSource로 연결을 설정합니다.
    //     const eventSource = new EventSource(eventSourceUrl);
    //
    //     eventSource.onopen = () => {
    //       console.log("Connection opened.");
    //     };
    //
    //     eventSource.onmessage = (e) => {
    //       const res = JSON.parse(e.data);
    //       console.log(res);
    //     };
    //
    //     eventSource.onerror = () => {
    //       console.log("Connection closed.");
    //     };
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  // const getStretchedIdea = () => {
  //   setLoading(true);
  //   const data = {
  //     ideaName: dragText,
  //   };
  //   axios
  //     .post(`${process.env.NEXT_PUBLIC_BASEURL}/idea/ai/stretch`, data)
  //     .then((res) => {
  //       setText(res.data.data.content);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
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
            <AIIcon />
          </ContextItem>
        </ContextMenu>
      )}
    </>
  );
}

export default TextArea;
