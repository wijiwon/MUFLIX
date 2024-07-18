import React, { useEffect, useRef, useState } from "react";
import { LoginHelpContainer } from "./style/LoginhelpContainer";
import {
  InputContainer,
  LoginInput,
} from "Contents/LoginContent/style/LoginBox";
import { LoginHelpButton } from "Components/Button/style";
const LoginHelpContent = () => {
  const findpwL = useRef<HTMLLabelElement>(null);

  const [isFocus, setIsFocus] = useState(false);
  useEffect(() => {
    if (findpwL.current) {
      if (isFocus == true) {
        findpwL.current.classList.add("focus");
      } else {
        findpwL.current.classList.remove("focus");
      }
    }
  }, [isFocus]);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    //! 이메일 입력 인풋에 입력된 값이 있으면 true 상태여야 한다. (리덕스 작업 때 수정할 것!)
    if (e.target.value == "") {
      setIsFocus(false);
    }
  };
  return (
    <LoginHelpContainer>
      <h1 style={{ width: "100%", textAlign: "start" }}>비밀번호 찾기</h1>
      <p style={{ width: "100%", textAlign: "start" }}>
        이메일 주소를 입력해주세요. 입력된 이메일 주소로 변경된 암호를
        보내드립니다.
      </p>
      <InputContainer>
        <label ref={findpwL}>이메일 주소</label>
        <LoginInput onFocus={handleFocus} onBlur={handleBlur} />
      <LoginHelpButton>비밀번호 찾기</LoginHelpButton>
      </InputContainer>
    </LoginHelpContainer>
  );
};

export default LoginHelpContent;
