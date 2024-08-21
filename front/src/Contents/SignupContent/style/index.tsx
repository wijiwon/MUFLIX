import styled from "styled-components";
import media from "Styles/mediaTemplate";

const StepBox = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const TitleBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  text-align: start;
  margin-bottom: 3rem;
  & p {
    margin: 0;
  }

  & h1 {
    margin-top: 0;

    ${media.mbl`
      font-size:1.4rem
    `}
  }

  ${media.mbl`
    margin-top: 0;
  `}
`;

const InputBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const CheckBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;

const ButtonBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  margin-top: 3rem;
`;

const CheckItem = styled.div`
  display: flex;
  align-items: start;
  text-align: start;

  & p {
    display: inline-block;
    margin: 0;
    margin-left: 0.5rem;

    & span {
      color: rgb(0, 178, 255);
      cursor: pointer;

      &:hover {
        text-decoration-line: underline;
      }
    }
  }
`;

const NextButton = styled.button`
  box-sizing: border-box;
  background-color: red;
  color: white;
  width: 100%;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.25rem;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(193, 17, 25);
  }
`;

const PrevButton = styled.button`
  box-sizing: border-box;
  background-color: rgba(193, 193, 193, 0.7);
  color: white;
  width: 30%;
  font-size: 1.2rem;
  border: none;
  border-radius: 0.25rem;
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(99, 99, 99, 0.7);
  }
`;

const PaymentBox = styled.div`
  box-sizing: border-box;
  width: 100%;
`;

const PaymentButton = styled.div`
  box-sizing: border-box;
  border: 1px solid rgb(193, 193, 193, 0.7);
  border-radius: 0.25rem;
  width: 100%;
  cursor: pointer;
  padding: 1rem;
  margin-bottom: 1rem;
  text-align: start;

  &:hover {
    border: 1px solid red;
  }
`;

const PlanBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  gap: 8px;
`;

const PlanItem = styled.button`
  box-sizing: border-box;
  border: 1px solid rgba(193, 193, 193, 0.7);
  width: 100%;
  text-align: start;
  padding: 1rem;
  color: white;
  background-color: transparent;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-height: 115px;
  cursor: pointer;

  & p {
    margin: 0;
    font-size: 18px;
    &.subText {
      font-size: 12px;
    }
  }

  &.check {
    /* 체크 시 효과 */
    border: none;
    &.premium {
      background: radial-gradient(
          140.76% 131.96% at 100% 100%,
          rgb(229, 9, 20) 0%,
          rgba(74, 42, 150, 0.5) 73.57%,
          rgba(74, 42, 150, 0) 100%
        ),
        rgb(29, 82, 157);
    }

    &.standard {
      background: radial-gradient(
          140.76% 131.96% at 100% 100%,
          rgb(176, 56, 220) 0%,
          rgba(74, 42, 150, 0.5) 73.57%,
          rgba(74, 42, 150, 0) 100%
        ),
        rgb(29, 82, 157);
    }

    &.ad {
      background: radial-gradient(
          140.76% 131.96% at 100% 100%,
          rgb(109, 59, 227) 0%,
          rgba(74, 42, 150, 0.5) 73.57%,
          rgba(74, 42, 150, 0) 100%
        ),
        rgb(29, 82, 157);
    }
  }
`;

const DetailBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-top: 3rem;
`;

const PlanDetail = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  & div {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px rgb(193, 193, 193) solid;
    padding-bottom: 0.7rem;
    margin-bottom: 1rem;

    & p {
      font-size: 0.85rem;
      margin: 0;
      color: #c1c1c1;
      font-weight: bold;
    }

    & .value {
      font-size: 1rem;
      color: white;
      font-weight: normal;
    }
  }
`;

export {
  StepBox,
  TitleBox,
  InputBox,
  CheckBox,
  ButtonBox,
  CheckItem,
  NextButton,
  PaymentBox,
  PaymentButton,
  PrevButton,
  PlanBox,
  PlanItem,
  DetailBox,
  PlanDetail,
};
