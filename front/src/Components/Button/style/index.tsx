import styled from "styled-components";
import media from "Styles/mediaTemplate";

const StartButton = styled.div`
  box-sizing: border-box;
  background-color: #ff0000;
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

export { StartButton };
