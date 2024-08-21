import React, { useEffect, useRef, useState } from "react";
import { IntroContainer } from "Contents/IntroContent/style/IntroContainer";
import { LoginBox } from "./style/LoginBox";
import { InputContainer, LoginInput } from "Components/Input/style";
import { LoginButton } from "Components/Button/style";
import { useNavigate } from "react-router-dom";
const LoginContent = () => {
  const nav = useNavigate();

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

  const handleClick = () => {
    nav("/loginHelp");
  };

  const SignupClick = () => {
    nav("/");
  };

  const handleLogin = () => {
    nav("/profiles");
  };

  return (
    <IntroContainer className="loginC">
      <LoginBox>
        <h1 style={{ width: "100%", textAlign: "left" }}>로그인</h1>
        <div style={{ width: "100%" }}>
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
        </div>
        <div style={{ marginTop: "1rem" }}>
          <LoginButton className="loginB" onClick={handleLogin}>
            로그인
          </LoginButton>
          {/* <p>또는</p> */}
          <LoginButton className="pwB" onClick={handleClick}>
            비밀번호 찾기
          </LoginButton>
        </div>
        <p>
          Muflix 회원이 아니신가요?{" "}
          <span onClick={SignupClick}>지금 가입하세요.</span>
        </p>
      </LoginBox>
    </IntroContainer>
  );
};

export default LoginContent;
