import React, { useEffect, useRef, useState } from "react";
import { IntroContainer } from "Contents/IntroContent/style/IntroContainer";
import { LoginBox, InputContainer, LoginInput } from "./style/LoginBox";
import { LoginButton } from "Components/Button/style";
const LoginContent = () => {
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
    //! 이메일 입력 인풋에 입력된 값이 있으면 true 상태여야 한다. (리덕스 작업 때 수정할 것!)
    if (e.target == EmailInput.current) {
      setIsEmailFocuse(false);
    } else {
      setIsPwFocuse(false);
    }
  };

  return (
    <IntroContainer className="loginC">
      <LoginBox>
        <h1 style={{ width: "100%", textAlign: "left" }}>로그인</h1>
        <div>
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
              ref={PwInput}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </InputContainer>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <LoginButton className="loginB">로그인</LoginButton>
          {/* <p>또는</p> */}
          <LoginButton className="pwB">비밀번호 찾기</LoginButton>
        </div>
      </LoginBox>
    </IntroContainer>
  );
};

export default LoginContent;
