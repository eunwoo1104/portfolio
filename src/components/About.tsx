import React from "react";
import { Langs } from "./Langs";
import { Techs } from "./Techs";

export const About: React.FC = () => {
  return (
    <div className="About">
      <h2>저는...</h2>
      <p>주로 백엔드/API 관련 개발을 하고 있습니다.</p>
      <p>다음 언어들을 할줄 알아요.</p>
      <Langs />
      <p>그리고 이런 기술들을 사용할 줄 알아요.</p>
      <Techs />
    </div>
  );
};
