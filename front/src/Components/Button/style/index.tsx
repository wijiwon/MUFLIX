import styled from "styled-components";

const StartButton = styled.div`
  background-color: #ff0000;
  padding: 0.75rem 1.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 0.25rem;
  cursor: pointer;

  &:after {
    content: "";
    display: inline-block;
    width: 15px;
    height: 15px;
    border: 3px solid white;
    margin-left: 0.5rem;
    border-top: none;
    border-right: none;
    rotate: -135deg;
  }

  &:hover{
    background-color: rgb(193, 17, 25);
  }


`;

export { StartButton };
