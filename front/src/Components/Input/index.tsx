import React, { useEffect, useState } from "react";
import { LoginInput, EmailContainer } from "./style";

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
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value == "") {
      setIsFocuse(false);
    }
  };

  return (
    <EmailContainer>
      <label className="emailLabel">이메일 주소</label>
      <LoginInput onFocus={handleFocus} onBlur={handleBlur} />
    </EmailContainer>
  );
};

export { EmailInput };
