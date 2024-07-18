import styled from "styled-components";
import media from "Styles/mediaTemplate";

const StartButton = styled.button`
  box-sizing: border-box;
  background-color: #ff0000;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;

  &:after {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    border: 3px solid white;
    margin-left: 0.5rem;
    border-top: none;
    border-right: none;
    rotate: -135deg;
  }

  &:hover {
    background-color: rgb(193, 17, 25);
  }

  ${media.mbl`
    margin-top: 1rem;
    width: max-content;
  `}
`;

const LoginButton = styled.button`
  width: 100%;
  margin-top: 1rem;
  box-sizing: border-box;
  font-size: 1rem;
  min-height: 2.5rem;
  padding: 0.375rem 1rem;
  border-radius: 0.25rem;
  color: white;
  border: none;
  cursor: pointer;

  &.loginB {
    background-color: red;

    &:hover {
      background: rgb(193, 17, 25);
    }
  }

  &.pwB {
    background-color: rgba(128, 128, 128, 0.4);

    &:hover {
      background: rgba(128, 128, 128, 0.3);
    }
  }
`;
export { StartButton, LoginButton };
