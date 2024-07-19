import React from "react";
import { BackgroundContainer } from "Components/Contaner";
import LoginHeader from "Layouts/Headers/LoginHeader";
import { SignupContainer } from "./style";
import Footer from "Layouts/Footers";

const index = () => {
  return (
    <>
      <BackgroundContainer>
        <LoginHeader />
        <SignupContainer></SignupContainer>
      </BackgroundContainer>
      <Footer />
    </>
  );
};

export default index;
