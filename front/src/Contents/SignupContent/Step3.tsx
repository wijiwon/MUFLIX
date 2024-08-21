import React from "react";
import {
  StepBox,
  TitleBox,
  PaymentBox,
  ButtonBox,
  PaymentButton,
  PrevButton,
} from "./style";
import { useNavigate } from "react-router-dom";
const Step3 = (props: { onPrev: () => void }) => {
  const nav = useNavigate();
  const handleNav = () => {
    nav("/login");
    //! 서버단에서 회원가입이 완료되면 Alert창으로 회원가입 완료 메세지가 뜨고 확인을 누르면 로그인 페이지로 이동
  };
  return (
    <StepBox>
      <TitleBox>
        <p style={{ fontSize: "13px" }}>3 / 3 단계</p>
        <h1>결제 방법 선택</h1>
        <p>
          결제 정보는 암호화되며, 결제 방법은 언제든지 변경할 수 있습니다.
          <br />
          안심하고 즐기세요. 해지는 온라인으로 간편하게.
        </p>
      </TitleBox>
      <PaymentBox>
        <PaymentButton>
          <div style={{ position: "relative" }}>
            Toss 간편 결제{" "}
            <img
              src={`${process.env.PUBLIC_URL}/images/TossIcon.png`}
              alt="toss icon"
              style={{
                width: "40px",
                position: "absolute",
                top: "50%",
                transform: "translate(10px,-50%)",
              }}
            />
          </div>
        </PaymentButton>
        <PaymentButton onClick={handleNav}>
          테스트용 결제 (클릭 시 요금제 회원가입 완료)
        </PaymentButton>
      </PaymentBox>
      <ButtonBox>
        <PrevButton onClick={props.onPrev}>이전</PrevButton>
      </ButtonBox>
    </StepBox>
  );
};

export default Step3;
