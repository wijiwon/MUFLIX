import styled from "styled-components";

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
  }
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


export {
  StepBox,
  TitleBox,
  InputBox,
  CheckBox,
  ButtonBox,
  CheckItem,
};
