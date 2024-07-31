import React, { useRef } from "react";
import {
  StepBox,
  TitleBox,
  ButtonBox,
  PrevButton,
  NextButton,
  PlanBox,
  PlanItem,
} from "./style";

const Step3 = (props: { onPrev: () => void }) => {
  const PremiumRef = useRef<HTMLButtonElement>(null);
  const StandardRef = useRef<HTMLButtonElement>(null);
  const AdRef = useRef<HTMLButtonElement>(null);

  const handlePlan = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target == PremiumRef.current) {
      PremiumRef.current?.classList.toggle("check");
      StandardRef.current?.classList.remove("check");
      AdRef.current?.classList.remove("check");
    } else if (e.target == StandardRef.current) {
      StandardRef.current?.classList.toggle("check");
      PremiumRef.current?.classList.remove("check");
      AdRef.current?.classList.remove("check");
    } else {
      AdRef.current?.classList.toggle("check");
      PremiumRef.current?.classList.remove("check");
      StandardRef.current?.classList.remove("check");
    }
  };

  return (
    <StepBox>
      <TitleBox>
        <p style={{ fontSize: "13px" }}>3 / 3 단계</p>
        <h1>원하는 멤버십을 선택하세요</h1>
      </TitleBox>
      <PlanBox>
        <PlanItem ref={PremiumRef} onClick={handlePlan} className="premium">
          <p>프리미엄</p>
          <p className="subText">4K + HDR</p>
        </PlanItem>
        <PlanItem ref={StandardRef} onClick={handlePlan} className="standard">
          <p>스탠다드</p>
          <p className="subText">1080p</p>
        </PlanItem>
        <PlanItem ref={AdRef} onClick={handlePlan} className="ad">
          <p>광고형 스탠다드</p>
          <p className="subText">1080p</p>
        </PlanItem>
      </PlanBox>
      <ButtonBox>
        <PrevButton onClick={props.onPrev}>이전</PrevButton>
        <NextButton style={{ marginLeft: "1rem" }}>다음</NextButton>
      </ButtonBox>
    </StepBox>
  );
};

export default Step3;
