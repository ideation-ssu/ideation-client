import * as React from "react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";

import { IChat } from "@/interfaces/chat";
import { useAuth } from "@/utils/auth";

import {
  Bot,
  ButtonWrap,
  ChatInner,
  ChatSpeechWrap,
  ChatWrap,
  CloseIcon,
  Header,
  Input,
  InputWrap,
  SendButton,
  SpeechBubble,
  StopButton,
  StyledDrawer,
} from "./styles";

export default function AIPanel({
  open,
  setOpen,
  msgList,
  setMsgList,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  msgList: IChat[];
  setMsgList: (list: IChat[]) => void;
}) {
  const { token } = useAuth();
  const [text, setText] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const startMsg = "아이디어 입력하셈";
  const processingMsg = "기다리셈";
  const [placeHolder, setPlaceHolder] = useState<string>(startMsg);

  const eventSourceRef = useRef<EventSourcePolyfill | null>(null);
  const scrollableElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (text && !eventSourceRef.current) {
    }
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      getStretchedIdea();
    }
  };

  const handleClick = () => {
    getStretchedIdea();
  };

  const getStretchedIdea = () => {
    if (!text) return;

    const eventSourceUrl = `${process.env.NEXT_PUBLIC_BASEURL}/idea/ai/stretch/stream?ideaName=${text}`;

    eventSourceRef.current = new EventSourcePolyfill(eventSourceUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    eventSourceRef.current?.addEventListener("open", (e) => {
      setText("");
      setIsDisabled(true);
      setPlaceHolder(processingMsg);
    });

    let answerText = "";
    eventSourceRef.current?.addEventListener("message", (e) => {
      const jsonData = JSON.parse(e.data);
      const dataValue = jsonData.data;
      answerText += dataValue;

      setMsgList([
        ...msgList,
        { message: text, role: "send" },
        { message: answerText, role: "answer" },
      ]);

      if (scrollableElementRef.current) {
        scrollableElementRef.current.scrollTop =
          scrollableElementRef.current.scrollHeight;
      }
    });

    eventSourceRef.current?.addEventListener("error", (e) => {
      eventSourceRef.current?.close();
      setIsDisabled(false);
      setPlaceHolder(startMsg);
    });
  };

  const handleStop = () => {
    eventSourceRef.current?.close();
    setIsDisabled(false);
    setPlaceHolder(startMsg);
  };

  return (
    <StyledDrawer anchor="right" open={open}>
      <Header>
        <div className="title">AI 도구</div>
        <div className="col_driver" />
        <div className="sub_title">아이디어 늘려쓰기</div>
        <CloseIcon onClick={() => setOpen(false)} />
      </Header>
      <ChatWrap ref={scrollableElementRef}>
        <ChatInner>
          <ChatSpeechWrap>
            <Bot />
            <SpeechBubble className="answer">
              안녕하세요, 여러분의 AI 늘려쓰기입니다. 만나서 정말 반가워요!!!
            </SpeechBubble>
          </ChatSpeechWrap>
          {msgList.map((chat: IChat, index: number) => {
            return (
              <ChatSpeechWrap key={index}>
                {chat.role === "answer" && <Bot />}
                <SpeechBubble className={chat.role}>
                  {chat.message}
                </SpeechBubble>
              </ChatSpeechWrap>
            );
          })}
        </ChatInner>
      </ChatWrap>
      <InputWrap>
        {isDisabled && <StopButton onClick={handleStop}>멈춰!</StopButton>}
        <Input
          placeholder={placeHolder}
          variant="standard"
          value={text}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          disabled={isDisabled}
        />
        <ButtonWrap>
          <SendButton onClick={handleClick} disabled={isDisabled}>
            전송
          </SendButton>
        </ButtonWrap>
      </InputWrap>
    </StyledDrawer>
  );
}
