import React, { useState } from "react";
import { StepBox, TitleBox, InputBox } from "./style";
import { InputContainer, LoginInput } from "Components/Input/style";
const Step1 = (props: { onNext: () => void }) => {
  const [isNext, setIsNext] = useState(false);
  const handleNext = () => {
    props.onNext();
    setIsNext(true);

    setTimeout(() => {
      setIsNext(false);
    }, 300);
  };
  return (
    <StepBox className={isNext ? "next" : ""}>
      <TitleBox>
        <p style={{ fontSize: "13px" }}>1 / 3 단계</p>
        <h1>비밀번호를 설정해 멤버십을 시작하세요</h1>
        <p>몇 단계만 더 거치면 뮤플릭스 가입 완료!</p>
      </TitleBox>
      <InputBox>
        <InputContainer>
          <label>이메일 주소</label>
          <LoginInput />
        </InputContainer>
      </InputBox>
      <button onClick={handleNext}>다음</button>
    </StepBox>
  );
};

export default Step1;
