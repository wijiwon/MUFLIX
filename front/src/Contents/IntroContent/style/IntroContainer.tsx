import media from "Styles/mediaTemplate";
import styled from "styled-components";

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  flex: 1;
  box-sizing: border-box;
  ${media.mbl`
    padding-left: 1rem;
    padding-right: 1rem;
  `}

  &.loginC {
    ${media.mbl`
      align-items: flex-start;
    `}
  }
`;

const EmailInputContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  ${media.mbl`
    flex-direction: column;
    align-items: center;
  `};
`;

export { IntroContainer, EmailInputContainer };
