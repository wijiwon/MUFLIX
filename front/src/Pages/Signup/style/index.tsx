import styled from "styled-components";
import media from "Styles/mediaTemplate";

const SignupContainer = styled.div`
  /* border: 1px solid red; */
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
  box-sizing: border-box;
  border: 1px solid rgba(193, 193, 193, 0.5);
  position: absolute;
  z-index: 1;
  width: 40vw;
  height: calc(100vh - 200px);
  background-color: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  font-size: 12px;
  text-align: start;
  overflow-y: scroll;

  ${media.mbl`
    width: 80vw
    /* height: 70vh */
  `}
`;

const PopupBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
`;

export { SignupContainer, StepContainer, PopupContainer, PopupBackground };
