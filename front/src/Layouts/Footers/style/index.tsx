import styled from "styled-components";
import media from "Styles/mediaTemplate";

const FooterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px auto 0;
  padding: 0 4%;
  color: grey;
  padding-bottom: 2rem;
`;

const IconBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
`;

const LinkBox = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 13px;
  margin: 0 0 14px;
  padding: 0;

  & li {
    box-sizing: border-box;
    flex: 0 0 50%;
    list-style-type: none;
    margin-bottom: 16px;
    padding-right: 22px;
    flex-basis: 25%;
    text-align: start;

    ${media.mbl`
        flex-basis: 50%;
    `}

    & a {
      text-decoration: none;
    }
  }
`;

const CopyrightBox = styled.div`
  width: 100%;
  text-align: start;
  font-size: 11px;
  line-height: 1.4;

  & div {
    margin-bottom: 0.3rem;
  }
`;
export { FooterContainer, IconBox, LinkBox, CopyrightBox };
