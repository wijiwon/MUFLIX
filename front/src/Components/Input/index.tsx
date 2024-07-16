import React, { useEffect, useState } from "react";
import { EmailInputStyle, EmailContainer } from "./style";

const EmailInput = () => {
  const [isFocuse, setIsFocuse] = useState(false);
  const EmailLabel = document.querySelector(".emailLabel");
  useEffect(() => {
    if (EmailLabel) {
      if (isFocuse == true) {
        EmailLabel.classList.add("focus");
      } else {
        EmailLabel.classList.remove("focus");
      }
    }
  }, [isFocuse]);

  const handleFocus = () => {
    setIsFocuse(true);
  };
  const handleBlur = () => {
    //! 이메일 입력 인풋에 입력된 값이 있으면 true 상태여야 한다. (리덕스 작업 때 수정할 것!)
    setIsFocuse(false);
  };

  return (
    <EmailContainer>
      <label className="emailLabel">이메일 주소</label>
      <EmailInputStyle onFocus={handleFocus} onBlur={handleBlur} />
    </EmailContainer>
  );
};

export { EmailInput };
