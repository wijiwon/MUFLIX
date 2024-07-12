import styled from "styled-components";

const LoginBackground = styled.div`
  background-image: url("${process.env.PUBLIC_URL}/images/BackImage.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
`;

const BackGradient = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  width: 100%;
  height: 100vh;
`;
export { LoginBackground, BackGradient };
