import React from "react";
import { LoginBackground, BackGradient } from "Contents/LoginBackground";
import LoginHeader from "Layouts/Headers/LoginHeader";
const index = () => {
  return (
    <>
      <LoginBackground>
        <BackGradient>
          <LoginHeader></LoginHeader>
        </BackGradient>
      </LoginBackground>
    </>
  );
};

export default index;
