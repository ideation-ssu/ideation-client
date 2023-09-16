import React from "react";
import WordCloud from "react-d3-cloud";
import { Word } from "react-d3-cloud/lib/WordCloud";

import { Container } from "@/components/Atoms/WordCloud/styles";
import { IWordCloud } from "@/interfaces/statistics";

function IdeaWordCloud({ words }: { words: IWordCloud[] }) {
  return (
    <Container>
      <WordCloud
        data={words}
        width={500}
        height={300}
        font="Pretendard-ExtraBold"
        fontSize={(word: Word) => Math.log2(word.value) * 5}
        padding={5}
        random={Math.random}
      />
    </Container>
  );
}

export default IdeaWordCloud;
