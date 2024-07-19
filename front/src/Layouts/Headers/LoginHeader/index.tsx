import React, { useRef } from "react";
import { HeaderContainer, HeaderLogo } from "Styles/Header";
import LoginButton from "./style/LoginButton";
import { useLocation, useNavigate } from "react-router-dom";

const LoginHeader = () => {
  const loginB = useRef(null);
  const homeB = useRef(null);

  const { pathname } = useLocation();
  const nav = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target == loginB.current) {
      nav("/login");
    } else {
      nav("/");
    }
  };
  return (
    <HeaderContainer>
      <HeaderLogo ref={homeB} onClick={handleClick}>
        MUFLIX
      </HeaderLogo>

      {pathname !== "/login" && (
        <LoginButton ref={loginB} onClick={handleClick}>
          로그인
        </LoginButton>
      )}
    </HeaderContainer>
  );
};

export default LoginHeader;
