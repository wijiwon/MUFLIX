import React from "react";
import { HeaderContainer, HeaderLogo } from "Styles/Header";
import LoginButton from "./style/LoginButton";

const index = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>MUFLIX</HeaderLogo>
      <LoginButton>로그인</LoginButton>
    </HeaderContainer>
  );
};

export default index;
