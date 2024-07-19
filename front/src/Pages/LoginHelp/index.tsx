import React from "react";
import LoginHeader from "Layouts/Headers/LoginHeader";
import Footer from "Layouts/Footers";
import LoginHelpContent from "Contents/LoginHelpContent";
import { BackgroundContainer } from "Components/Contaner";

const index = () => {
  return (
    <>
      <BackgroundContainer>
        <LoginHeader />
        <LoginHelpContent />
      </BackgroundContainer>
      <Footer />
    </>
  );
};

export default index;
