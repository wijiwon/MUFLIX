import { createGlobalStyle } from "styled-components";
import media from "Styles/mediaTemplate";
const Globalstyle = createGlobalStyle`
    body{
        background-color: #141414;
        color: #ffffff;
        min-width: 390px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        
        ${media.mbl`
            background-color: #000000
        `}
    }
`;

export { Globalstyle };
