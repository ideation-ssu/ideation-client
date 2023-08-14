import React, { KeyboardEvent, useState } from "react";

import OutlineInputBox from "@/components/Atoms/OutlineInputBox";

import { CancelButton, Container, Tag } from "./styles";

function HashTag(): React.ReactElement {
  const [text, setText] = useState<string>("");
  const [tags, setTags] = useState<string[]>(["테스트"]);

  const addHashTag = (e: KeyboardEvent<HTMLInputElement>) => {
    const finish = ["Enter", "NumpadEnter"];
    if (!finish.includes(e.key)) return;

    const target = e.target as HTMLInputElement;
    const tag = target.value.trim();
    if (!tag || tags.length >= 3) return setText("");

    setTags((prevTags: string[]) => [...prevTags, tag]);
    setText("");
  };

  const deleteHashTag = (tag: string) => {
    setTags((prevTags: string[]) => prevTags.filter((t: string) => t !== tag));
  };

  return (
    <Container>
      <OutlineInputBox
        isNormal={true}
        text={text}
        setText={setText}
        autoComplete={"tag"}
        placeHolder={"해시태그 등록 (최대 3개)"}
        onKeyUp={addHashTag}
      />
      {tags?.map((tag, index) => {
        return (
          <Tag key={index}>
            <span>{`#${tag}`}</span>
            <CancelButton onClick={() => deleteHashTag(tag)} />
          </Tag>
        );
      })}
    </Container>
  );
}

export default HashTag;
