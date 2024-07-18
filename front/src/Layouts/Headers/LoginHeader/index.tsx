import React from "react";
import { HeaderContainer, HeaderLogo } from "Styles/Header";
import LoginButton from "./style/LoginButton";
import { useLocation, useNavigate } from "react-router-dom";

const LoginHeader = () => {
  const { pathname } = useLocation();
  const nav = useNavigate();

  const handleClick = () => {
    nav("/login");
  };
  return (
    <HeaderContainer>
      <HeaderLogo>MUFLIX</HeaderLogo>

      {pathname !== "/login" && (
        <LoginButton onClick={handleClick}>로그인</LoginButton>
      )}
    </HeaderContainer>
  );
};

export default LoginHeader;
