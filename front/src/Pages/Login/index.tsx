import React from "react";
import { BackGradient, LoginBackground } from "Contents/LoginBackground";
import LoginHeader from "Layouts/Headers/LoginHeader";
import LoginContent from "Contents/LoginContent";

const index = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <LoginBackground>
        <BackGradient>
          <LoginHeader />
          <LoginContent />
        </BackGradient>
      </LoginBackground>
    </div>
  );
};

export default index;
