import React, { useState } from "react";
import { BackgroundContainer } from "Components/Contaner";
import LoginHeader from "Layouts/Headers/LoginHeader";
import { SignupContainer, StepContainer } from "./style";
import Footer from "Layouts/Footers";
import { Step1, Step2, Step3 } from "Contents/SignupContent";

const Signup = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <>
      <BackgroundContainer>
        <LoginHeader />
        <SignupContainer>
          <StepContainer
            className={currentStep == 1 ? "active" : ""}
            style={{ left: currentStep === 1 ? "0" : "-100%" }}
          >
            <Step1 onNext={handleNextStep} />
          </StepContainer>
          <StepContainer
            className={currentStep === 2 ? "active" : ""}
            style={{
              left:
                currentStep === 2 ? "0" : currentStep === 1 ? "100%" : "-100%",
            }}
          >
            <Step2 onNext={handleNextStep} onPrev={handlePrevStep} />
          </StepContainer>
          <StepContainer
            className={currentStep === 3 ? "active" : ""}
            style={{
              left:
                currentStep === 3 ? "0" : currentStep === 2 ? "100%" : "-100%",
            }}
          >
            <Step3 onPrev={handlePrevStep} />
          </StepContainer>
        </SignupContainer>
      </BackgroundContainer>
      <Footer />
    </>
  );
};

export default Signup;
