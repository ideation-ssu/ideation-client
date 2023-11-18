import * as React from "react";
import { ChangeEvent, useRef, useState } from "react";
import { EventSourcePolyfill } from "event-source-polyfill";

import { IChat } from "@/interfaces/chat";
import { useAuth } from "@/utils/auth";

import {
  AIBotIcon,
  AILogo,
  AnswerButton,
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
  StopIcon,
  StyledDrawer,
} from "./styles";

export default function AIPanel({
  open,
  setOpen,
  msgList,
  setMsgList,
  setCopyText,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  msgList: IChat[];
  setMsgList: (list: IChat[]) => void;
  setCopyText: (text: string) => void;
}) {
  const { token } = useAuth();
  const [text, setText] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const startMsg = "아이디어를 입력해주세요.";
  const processingMsg = "답변을 멈추고 싶으면, 멈추기 버튼을 눌러주세요.";
  const [placeHolder, setPlaceHolder] = useState<string>(startMsg);

  const eventSourceRef = useRef<EventSourcePolyfill | null>(null);
  const scrollableElementRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      getStretchedIdea();
    }
  };

  const handleStretchedIdea = () => {
    getStretchedIdea();
  };

  const handleIdeaClick = (answer: string) => {
    setCopyText(answer);
    setOpen(false);
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
        <AILogo />
        <div className="title">AI 도구</div>
        <div className="col_driver" />
        <div className="sub_title">아이디어 늘려쓰기</div>
        <CloseIcon onClick={() => setOpen(false)} />
      </Header>
      <ChatWrap ref={scrollableElementRef}>
        <ChatInner>
          <ChatSpeechWrap>
            <Bot>
              <AIBotIcon />
            </Bot>
            <SpeechBubble className="answer">
              {`당신의 아이디어에 대한 간단한 소개를 입력하면, AI가 아이디어를
              더욱 구체화 시켜드립니다. \n 지금 바로 아이디어를 입력해보세요!`}
            </SpeechBubble>
          </ChatSpeechWrap>
          {msgList.map((chat: IChat, index: number) => {
            return (
              <ChatSpeechWrap key={index}>
                {chat.role === "answer" && (
                  <Bot>
                    <AIBotIcon />
                  </Bot>
                )}
                <SpeechBubble className={chat.role}>
                  {chat.message}
                  {chat.role === "answer" && !isDisabled && (
                    <AnswerButton onClick={() => handleIdeaClick(chat.message)}>
                      아이디어 사용하기
                    </AnswerButton>
                  )}
                </SpeechBubble>
              </ChatSpeechWrap>
            );
          })}
        </ChatInner>
      </ChatWrap>
      <InputWrap>
        {isDisabled && (
          <StopButton onClick={handleStop}>
            <StopIcon />
            멈추기
          </StopButton>
        )}
        <Input
          placeholder={placeHolder}
          variant="standard"
          value={text}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          disabled={isDisabled}
        />
        <ButtonWrap>
          <SendButton onClick={handleStretchedIdea} disabled={isDisabled}>
            전송
          </SendButton>
        </ButtonWrap>
      </InputWrap>
    </StyledDrawer>
  );
}
