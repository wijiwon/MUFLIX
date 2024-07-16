import media from "Layouts/Headers/LoginHeader/style/mediaTemplate";
import styled from "styled-components";

const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  flex: 1;
`;

const EmailInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  ${media.mbl`
    flex-direction: column;
  `};
`;

export { IntroContainer, EmailInputContainer };
