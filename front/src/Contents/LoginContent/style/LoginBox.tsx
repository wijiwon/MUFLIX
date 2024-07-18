import styled from "styled-components";
import media from "Styles/mediaTemplate";

const LoginBox = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  max-width: 450px;
  padding: 48px 68px;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10rem;

  ${media.mbl`
    padding: 0 5%;
  `}

  & p {
    color: rgba(193, 193, 193, 0.7);
    text-align: start;

    & span {
      color: white;
      cursor: pointer;

      &:hover {
        text-decoration-line: underline;
      }
    }
  }
`;

const LoginInput = styled.input`
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(195, 195, 195, 0.7);
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
  position: relative;
  padding: 1.5rem 1rem 0.5rem;
  border-radius: 0.25rem;
  color: white;
  ${media.mbl`
    width: 100%;

  `}
`;

const InputContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  flex: 1 1 auto;
  margin-top: 0.5rem;
  width: 100%;
  & label {
    position: absolute;
    z-index: 1;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.7);
    left: 1rem;
    /* right: 1rem; */
    top: 1rem;
    transition-property: font-size, top;
    transition-duration: 250ms;
    &.focus {
      font-size: 0.75rem;
      top: 0.5rem;
    }

    ${media.mbl`
      text-align: left;
      width: 100%;

    `}
  }
  ${media.mbl`
    width: 100%;

  `}

  ${media.desk`
      min-width: 12.5rem;
  `}
`;

export { LoginBox, InputContainer, LoginInput };
