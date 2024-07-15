import styled from "styled-components";

const EmailContainer = styled.div`
  position: relative;
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
  }
`;

const EmailInputStyle = styled.input`
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(195, 195, 195, 0.7);
  width: 100%;
  min-width: 12.5rem;
  font-size: 1rem;
  line-height: 1.5;
  position: relative;
  color: #ffffff;
  padding: 1.5rem 1rem 0.5rem;
  border-radius: 0.25rem;
`;

export { EmailContainer, EmailInputStyle };
