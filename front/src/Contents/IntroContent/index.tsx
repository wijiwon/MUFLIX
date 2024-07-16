import React from "react";
import IntroContainer from "./style/IntroContainer";
import { EmailInput } from "Components/Input";
import { StartButton } from "Components/Button/style";
const index = () => {
  return (
    <IntroContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1>뮤지컬을 언제 어디서나 무제한으로</h1>
        <p>
          시청할 준비가 되셨나요? 멤버십을 등록하려면 이메일 주소를
          입력해주세요.
        </p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <EmailInput />
          <StartButton>시작하기</StartButton>
        </div>
      </div>
    </IntroContainer>
  );
};

export default index;
