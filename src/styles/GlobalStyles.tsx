import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --accent-color: #22A0BC;
    --dark-color: #161616;
    --gray-dark-color: #595959;
    --gray-color: #9C9C9C;
    --gray-light-color: #DADADA;
    --white-gray-color: #F4F4F4;
    --white-color: #FDFDFD;

    --fs-title: 2.4rem;
    --fs-hl: 2rem;
    --fs-text1: 1.8rem;
    --fs-text2: 1.6rem;
    --fs-cap: 1.4rem;

    @media (max-width: 400px) {
      --fs-hl: 1.8rem;
      --fs-text1: 1.6rem;
      --fs-text2: 1.4rem;
      --fs-cap: 1.0rem;
  }

  }


  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Manrope', sans-serif;
    font-size: 1.6rem;
    line-height: 1.5;
    background-color: #F4F4F4;
    color: #161616;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button, textarea, select {
    font: inherit;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
    background: none;
  }

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 2.2rem;
  }

  h3 {
    font-size: 1.6rem;
    font-weight: 600;
  }

  hr {
    border: none;
    height: 1px;
    background-color: #dadada;
    width: 100%;
    margin-bottom: 2.2rem;
  }

  @media (max-width: 400px) {
    body {
      line-height: 1.2;
    }
  }
`;

export default GlobalStyle;
