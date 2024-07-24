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

export { LoginBox };
