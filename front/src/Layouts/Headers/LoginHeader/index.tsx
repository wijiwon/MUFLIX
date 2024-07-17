import React from "react";
import { HeaderContainer, HeaderLogo } from "Styles/Header";
import LoginButton from "./style/LoginButton";
import { useLocation } from "react-router-dom";

const LoginHeader = () => {
  const { pathname } = useLocation();
  return (
    <HeaderContainer>
      <HeaderLogo>MUFLIX</HeaderLogo>

      {pathname !== "/login" && <LoginButton>로그인</LoginButton>}
    </HeaderContainer>
  );
};

export default LoginHeader;
