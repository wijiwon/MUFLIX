import styled from "styled-components";

const StepBox = styled.div`
  width: 100%;
  height: 100%;
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
  }
`;

const InputBox = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export { StepBox, TitleBox, InputBox };
