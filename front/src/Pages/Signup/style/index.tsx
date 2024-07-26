import styled from "styled-components";

const SignupContainer = styled.div`
  border: 1px solid red;
  position: relative;
  display: flex;
  overflow: hidden;
  text-align: center;
  width: 100%;
  height: 100%;
  max-width: 700px;
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

const PopupContainer = styled.div`
  /* display: none; */
  box-sizing: border-box;
  border: 1px solid yellowgreen;
  position: absolute;
  z-index: 1;
  width: 70%;
  height: 100%;
  height: inherit;
  background-color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  font-size: 12px;
  text-align: start;
  overflow-y: scroll;
`;

export { SignupContainer, StepContainer, PopupContainer };
