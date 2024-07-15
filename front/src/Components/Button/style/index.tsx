import styled from "styled-components";

const StartButton = styled.div`
  background-color: #ff0000;
  min-height: 3.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  &:after {
    content: "";
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 3px solid white;
    margin-left: 0.5rem;
    border-top: none;
    border-right: none;
    rotate: -135deg;
  }
`;

export { StartButton };
