import React, { useRef, useState } from "react";
import {
  StepBox,
  TitleBox,
  ButtonBox,
  PrevButton,
  NextButton,
  PlanBox,
  PlanItem,
  DetailBox,
  PlanDetail,
} from "./style";

const Step2 = (props: { onNext: () => void; onPrev: () => void }) => {
  const PreButtonRef = useRef<HTMLButtonElement>(null);
  const StanButtonRef = useRef<HTMLButtonElement>(null);
  const AdButtonRef = useRef<HTMLButtonElement>(null);

  const [selecPlan, setSelecPlan] = useState("pre");

  const handlePlan = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target == PreButtonRef.current) {
      PreButtonRef.current?.classList.add("check");
      StanButtonRef.current?.classList.remove("check");
      AdButtonRef.current?.classList.remove("check");
      setSelecPlan("pre");
    } else if (e.target == StanButtonRef.current) {
      StanButtonRef.current?.classList.add("check");
      PreButtonRef.current?.classList.remove("check");
      AdButtonRef.current?.classList.remove("check");
      setSelecPlan("stan");
    } else {
      AdButtonRef.current?.classList.add("check");
      PreButtonRef.current?.classList.remove("check");
      StanButtonRef.current?.classList.remove("check");
      setSelecPlan("ad");
    }
  };

  return (
    <StepBox>
      <TitleBox>
        <p style={{ fontSize: "13px" }}>2 / 3 단계</p>
        <h1>원하는 멤버십을 선택하세요</h1>
      </TitleBox>
      <PlanBox>
        <PlanItem
          ref={PreButtonRef}
          onClick={handlePlan}
          className="premium check"
        >
          <p>프리미엄</p>
          <p className="subText">4K + HDR</p>
        </PlanItem>
        <PlanItem ref={StanButtonRef} onClick={handlePlan} className="standard">
          <p>스탠다드</p>
          <p className="subText">1080p</p>
        </PlanItem>
        <PlanItem ref={AdButtonRef} onClick={handlePlan} className="ad">
          <p>광고형 스탠다드</p>
          <p className="subText">1080p</p>
        </PlanItem>
      </PlanBox>
      <DetailBox>
        <PlanDetail>
          <div>
            <p>월 요금</p>
            <p className="value">
              {selecPlan == "pre"
                ? "17,000원"
                : selecPlan == "stan"
                ? "13,500원"
                : "5,500원"}
            </p>
          </div>
          <div>
            <p>화질과 음질</p>
            <p className="value">
              {" "}
              {selecPlan == "pre" ? "가장 좋음" : "좋음"}
            </p>
          </div>
          <div>
            <p>해상도</p>
            <p className="value">
              {selecPlan == "pre" ? "4K(UHD) + HDR" : "1080p(풀 HD)"}
            </p>
          </div>
          {selecPlan == "pre" ? (
            <div>
              <p>공간음향</p>
              <p className="value">포함</p>
            </div>
          ) : (
            <></>
          )}
          <div>
            <p>지원 디바이스</p>
            <p className="value">컴퓨터, 태블릿, 스마트폰</p>
          </div>
          <div>
            <p>가구 구성원 간 동시접속자 수</p>
            <p className="value"> {selecPlan == "pre" ? "4" : "2"}</p>
          </div>
          <div>
            <p>광고</p>
            <p className="value">
              {" "}
              {selecPlan != "ad" ? "무광고" : "생각보다 적은 광고"}
            </p>
          </div>
        </PlanDetail>
      </DetailBox>
      <ButtonBox>
        <PrevButton onClick={props.onPrev}>이전</PrevButton>
        <NextButton style={{ marginLeft: "1rem" }} onClick={props.onNext}>
          다음
        </NextButton>
      </ButtonBox>
    </StepBox>
  );
};

export default Step2;
