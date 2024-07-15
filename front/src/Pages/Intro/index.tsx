import React from "react";
import { LoginBackground, BackGradient } from "Contents/LoginBackground";
import LoginHeader from "Layouts/Headers/LoginHeader";
import IntroContent from "Contents/IntroContent";
const index = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <LoginBackground>
        <BackGradient>
          <LoginHeader />
          <IntroContent />
        </BackGradient>
      </LoginBackground>
    </div>
  );
};

export default index;
