import React, { useEffect, useRef, useState } from "react";
import {
  StepBox,
  TitleBox,
  InputBox,
  CheckBox,
  ButtonBox,
  CheckItem,
  NextButton,
} from "./style";
import { InputContainer, LoginInput } from "Components/Input/style";
const Step1 = (props: {
  onNext: () => void;
  pop: React.Dispatch<React.SetStateAction<boolean>>;
  scroll: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [isNext, setIsNext] = useState(false);
  const [isEmailFocuse, setIsEmailFocuse] = useState(false);
  const [isPwFocuse, setIsPwFocuse] = useState(false);

  const EmailLabel = useRef<HTMLLabelElement>(null);
  const PwLabel = useRef<HTMLLabelElement>(null);

  const EmailInput = useRef<HTMLInputElement>(null);
  const PwInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (EmailLabel.current) {
      if (isEmailFocuse == true) {
        EmailLabel.current.classList.add("focus");
      } else {
        EmailLabel.current.classList.remove("focus");
      }
    }
    if (PwLabel.current) {
      if (isPwFocuse == true) {
        PwLabel.current.classList.add("focus");
      } else {
        PwLabel.current.classList.remove("focus");
      }
    }
  }, [isEmailFocuse, isPwFocuse]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target == EmailInput.current) {
      setIsEmailFocuse(true);
    } else {
      setIsPwFocuse(true);
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value == "") {
      if (e.target == EmailInput.current) {
        setIsEmailFocuse(false);
      } else {
        setIsPwFocuse(false);
      }
    }
  };

  const handleNext = () => {
    props.onNext();
    setIsNext(true);

    setTimeout(() => {
      setIsNext(false);
    }, 300);
  };

  const handlePopup = () => {
    props.pop(true);
    const currentScrollY = window.scrollY;
    props.scroll(currentScrollY);
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${currentScrollY}px`; // 현재 스크롤 위치
    document.body.style.overflowY = "scroll";
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
          <label ref={EmailLabel}>이메일 주소</label>
          <LoginInput
            ref={EmailInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </InputContainer>
        <InputContainer>
          <label ref={PwLabel}>비밀번호</label>
          <LoginInput
            type="password"
            ref={PwInput}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </InputContainer>
      </InputBox>
      <CheckBox>
        <CheckItem>
          <input type="checkbox" style={{ accentColor: "red" }} id="" />
          <p>
            예, 저는 <span onClick={handlePopup}>개인정보 처리방침</span>
            에 따른 개인정보 수집 및 활용에 동의합니다.
            <br />
            (테스트를 진행하기 위해 입력하는 데이터는 개인정보를 포함하지 마시길
            바랍니다.)
          </p>
        </CheckItem>
        <CheckItem>
          <input type="checkbox" style={{ accentColor: "red" }} id="" />
          <p>예, 뮤플릭스 특별 할인 알림 이메일을 보내주세요. (선택 사항)</p>
        </CheckItem>
      </CheckBox>
      <ButtonBox>
        <NextButton onClick={handleNext}>동의하고 계속</NextButton>
      </ButtonBox>
    </StepBox>
  );
};

export default Step1;
