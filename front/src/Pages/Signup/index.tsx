import React, { useState } from "react";
import { BackgroundContainer } from "Components/Contaner";
import LoginHeader from "Layouts/Headers/LoginHeader";
import { SignupContainer } from "./style";
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
          {/* {currentStep == 1 && <Step1 onNext={handleNextStep} />}
          {currentStep == 2 && (
            <Step2 onNext={handleNextStep} onPrev={handlePrevStep} />
          )}
          {currentStep == 3 && <Step3 onPrev={handlePrevStep} />} */}
          <Step1
            className={currentStep == 1 ? "active" : ""}
            onNext={handleNextStep}
          />
        </SignupContainer>
      </BackgroundContainer>
      <Footer />
    </>
  );
};

export default Signup;
