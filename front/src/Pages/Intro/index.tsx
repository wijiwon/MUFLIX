import React from "react";
import { IntroBackground, BackGradient } from "Contents/LoginBackground";
import LoginHeader from "Layouts/Headers/LoginHeader";
import IntroContent from "Contents/IntroContent";
const index = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <IntroBackground>
        <BackGradient>
          <LoginHeader />
          <IntroContent />
        </BackGradient>
      </IntroBackground>
    </div>
  );
};

export default index;
