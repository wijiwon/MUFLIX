import React from "react";
import { IntroContainer, EmailInputContainer } from "./style/IntroContainer";
import { EmailInput } from "Components/Input";
import { StartButton } from "Components/Button/style";
import { useNavigate } from "react-router-dom";
const IntroContent = () => {
  const nav = useNavigate();

  const handleClick = () => {
    //! 이메일이 정상적으로 입력되었을 경우에만 넘어갈 수 있다. (정규식 사용해서 확인하자)
    nav("signup");
  };
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
        <EmailInputContainer>
          <EmailInput />
          <StartButton onClick={handleClick}>시작하기</StartButton>
        </EmailInputContainer>
      </div>
    </IntroContainer>
  );
};

export default IntroContent;
