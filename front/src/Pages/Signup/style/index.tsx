import styled from "styled-components";

const SignupContainer = styled.div`
  border: 1px solid red;
  position: relative;
  display: flex;
  overflow: hidden;
  text-align: center;
  width: 100%;
  max-width: 800px;
  flex: 1;
  box-sizing: border-box;
`;

const StepContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  transition: left 0.3s ease-in-out;

  &.active {
    left: 0;
    z-index: 1;
  }

  &:not(.active) {
    visibility: hidden;
  }
`;

export { SignupContainer, StepContainer };
