import React, { useState } from "react";
import { BackgroundContainer } from "Components/Contaner";
import LoginHeader from "Layouts/Headers/LoginHeader";
import { SignupContainer, StepContainer, PopupContainer } from "./style";
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
          <PopupContainer>
            <h2>개인정보 처리방침</h2>
            <p>
              아래의 내용은 임의로 작성된 내용으로 개인정보 처리방침 규격을
              구성하기 위한 내용일 뿐임을 안내드립니다. 따라서 절대 개인정보를
              입력하지 마시고 테스트용 데이터를 입력해주시길 바랍니다. 입력하신
              회원 정보는 개발자 임의로 파기될 수 있음을 알려드립니다.
            </p>
            <hr />
            <p>
              1. 개인정보의 처리 목적 <br />
              <br />
              뮤플릭스 (‘www.urbanl.com’이하 ‘뮤플릭스’) 은 다음의 목적을 위하여
              개인정보를 처리하고 있으며, 다음의 목적 이외의 용도로는 이용하지
              않습니다.
              <br /> – 고객 가입의사 확인, 고객에 대한 서비스 제공에 따른 본인
              식별.인증, 회원자격 유지.관리, 물품 또는 서비스 공급에 따른 금액
              결제, 물품 또는 서비스의 공급.배송 등 <br />
              <br />
              <br />
              2. 개인정보의 처리 및 보유 기간 <br />
              <br />① ‘뮤플릭스’는 정보주체로부터 개인정보를 수집할 때 동의 받은
              개인정보 보유․이용기간 또는 법령에 따른 개인정보 보유․이용기간
              내에서 개인정보를 처리․보유합니다.
              <br />
              <br />
              <br />
              3. 정보주체와 법정대리인의 권리·의무 및 그 행사방법 이용자는
              개인정보주체로써 다음과 같은 권리를 행사할 수 있습니다. <br />
              <br />① 정보주체는 ‘뮤플릭스’ 에 대해 언제든지 다음 각 호의
              개인정보 보호 관련 권리를 행사할 수 있습니다.
              <br /> 1. 개인정보 열람요구
              <br /> 2. 오류 등이 있을 경우 정정 요구
              <br /> 3. 삭제요구
              <br /> 4. 처리정지 요구 <br />
              <br />
              <br />
              4. 처리하는 개인정보의 항목 작성 <br />
              <br />
              ① ‘뮤플릭스’은 다음의 개인정보 항목을 처리하고 있습니다.
              <br />
              <br /> ‘뮤플릭스’에서 수집하는 개인정보 항목 <br /> ‘뮤플릭스’
              회원 가입 및 고객 문의 시, 제공 동의를 해주시는 개인정보 수집
              항목입니다.
              <br />
              <br />
              ■ 회원 가입 시(회원)
              <br /> – 필수항목 : 이메일
              <br /> – 수집목적 : 뮤플릭스 회원관리 및 마케팅 이용
              <br /> – 보유기간 : 회원 탈퇴 또는 개발자 임의로 파기 <br />
              <br />
              <br />
              5. 개인정보의 파기 <br />
              <br />
              ‘뮤플릭스’은 원칙적으로 개인정보 처리목적이 달성된 경우에는
              지체없이 해당 개인정보를 파기합니다. 파기의 절차, 기한 및 방법은
              다음과 같습니다.’
              <br />
              <br /> -파기절차
              <br /> 이용자가 입력한 정보는 목적 달성 후 별도의 DB에
              옮겨져(종이의 경우 별도의 서류) 내부 방침 및 기타 관련 법령에 따라
              일정기간 저장된 후 혹은 즉시 파기됩니다. 이 때, DB로 옮겨진
              개인정보는 법률에 의한 경우가 아니고서는 다른 목적으로 이용되지
              않습니다.
              <br />
              <br /> -파기기한
              <br /> 이용자의 개인정보는 개인정보의 보유기간이 경과된 경우에는
              보유기간의 종료일로부터 5일 이내에, 개인정보의 처리 목적 달성,
              해당 서비스의 폐지, 사업의 종료 등 그 개인정보가 불필요하게 되었을
              때에는 개인정보의 처리가 불필요한 것으로 인정되는 날로부터 5일
              이내에 그 개인정보를 파기합니다.
              <br />
              <br />
              <br />
              6. 개인정보 자동 수집 장치의 설치•운영 및 거부에 관한 사항 <br />
              <br />① ‘뮤플릭스’은 개별적인 맞춤서비스를 제공하기 위해
              이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.{" "}
              <br />
              <br />② 쿠키는 웹사이트를 운영하는데 이용되는 서버(https)가
              이용자의 컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC
              컴퓨터내의 하드디스크에 저장되기도 합니다. <br />
              가. 쿠키의 사용 목적 : 이용자가 방문한 각 서비스와 웹 사이트들에
              대한 방문 및 이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여
              이용자에게 최적화된 정보 제공을 위해 사용됩니다. <br />
              나. 쿠키의 설치•운영 및 거부 : 웹브라우저 상단의 도구-인터넷
              옵션-개인정보 메뉴의 옵션 설정을 통해 쿠키 저장을 거부 할 수
              있습니다. <br />
              다. 쿠키 저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할
              수 있습니다. <br />
              <br />
              <br />
              7. 개인정보 보호책임자 작성 <br />
              <br />① ‘뮤플릭스’는 개인정보 처리에 관한 업무를 총괄해서
              책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제
              등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
              <br />
              <br /> ▶ 개인정보 보호책임자
              <br /> 성명 : 위지원
              <br /> 직책 : 대표
              <br /> 직급 : CEO
              <br /> 연락처 : dnlwldnjs5@gmail.com
              <br /> ※ 개인정보 보호 담당부서로 연결됩니다. <br />② ‘뮤플릭스’의
              서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련
              문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자로
              문의하실 수 있습니다.
              <br /> ‘뮤플릭스’은 정보주체의 문의에 대해 지체 없이 답변 및
              처리해드릴 것입니다.
            </p>
          </PopupContainer>
        </SignupContainer>
      </BackgroundContainer>
      <Footer />
    </>
  );
};

export default Signup;
