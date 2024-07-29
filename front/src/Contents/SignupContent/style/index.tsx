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
  margin-top: 5rem;
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

export {
  StepBox,
  TitleBox,
  InputBox,
  CheckBox,
  ButtonBox,
  CheckItem,
  NextButton,
};
