import styled from "styled-components";
import media from "Styles/mediaTemplate";
const LoginBackground = styled.div`
  background-image: url("${process.env.PUBLIC_URL}/images/BackImage.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  flex: 1;
  ${media.mbl`
    background-image:none;
    `}
`;

const IntroBackground = styled.div`
  background-image: url("${process.env.PUBLIC_URL}/images/BackImage.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  flex: 1;
`;

const BackGradient = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export { LoginBackground, BackGradient, IntroBackground };
