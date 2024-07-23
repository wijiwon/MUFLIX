import React, { useState } from "react";
import { StepContainer } from "./style";

const Step1 = (props: { onNext: () => void }) => {
  const [isNext, setIsNext] = useState(false);
  const handleNext = () => {
    props.onNext();
    setIsNext(true);

    setTimeout(() => {
      setIsNext(false);
    }, 300);
  };
  return (
    <StepContainer
      className={isNext ? "next" : ""}
      style={{ backgroundColor: "red" }}
    >
      <button onClick={handleNext}>다음</button>
    </StepContainer>
  );
};

export default Step1;
