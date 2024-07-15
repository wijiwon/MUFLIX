import styled from "styled-components";

const HeaderContainer = styled.div`
  width: inherit;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  flex-grow: 0;
`;

const HeaderLogo = styled.p`
  color: #ff0000;
  font-weight: 700;
  font-size: 2.5rem;
  margin: 0;
`;

export { HeaderContainer, HeaderLogo };
