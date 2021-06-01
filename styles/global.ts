import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}
  * {
    box-sizing: border-box;
  }
  body {
    min-width: 320px;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }
  p {
    line-height: 1.5;
  }
  @media (max-width: 252px) {
    html {
      font-size: 3px;
    }
  }
  @media (min-width: 253px) and (max-width: 270px) {
    html {
      font-size: 3.5px;
    }
  }
  @media (min-width: 271px) and (max-width: 288px) {
    html {
      font-size: 4px;
    }
  }
  @media (min-width: 289px) and (max-width: 306px) {
    html {
      font-size: 4.5px;
    }
  }
  @media (min-width: 307px) and (max-width: 324px) {
    html {
      font-size: 5px;
    }
  }
  @media (min-width: 325px) and (max-width: 342px) {
    html {
      font-size: 5.5px;
    }
  }
  @media (min-width: 343px) and (max-width: 360px) {
    html {
      font-size: 6px;
    }
  }
  @media (min-width: 361px) and (max-width: 375px) {
    html {
      font-size: 6.5px;
    }
  }
  @media (min-width: 376px) and (max-width: 378px) {
    html {
      font-size: 7px;
    }
  }
  @media (min-width: 379px) and (max-width: 396px) {
    html {      
      font-size: 7px;
    }
  }
  @media (min-width: 397px) and (max-width: 414px) {
    html {      
      font-size: 7.2px;
    }
  }
  @media (min-width: 415px) and (max-width: 432px) {
    html {      
      font-size: 7.2px;
    }
  }
  @media (min-width: 433px) and (max-width: 451px) {
    html {
      font-size: 7.2px;
    }
  }
  @media (min-width: 451px) and (max-width: 481px) {
    html {
      font-size: 7.8px;
    }
  }
  /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */
  @media (min-width: 481px) and (max-width: 767px) {
    html {
      font-size: 7.8px;
    }
  }
  /* 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    html {
      font-size: 12px;
    }
  }
  /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */
  @media (min-width: 768px) and (max-width: 1024px) {
    html {
      font-size: 12px;
    }
  }
  /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */
  @media (min-width: 1025px) {
    html {
      font-size: 13.5px;
    }
  }
`;

export default GlobalStyle;
