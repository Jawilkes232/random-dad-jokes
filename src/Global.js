import { createGlobalStyle } from 'styled-components';
//inspired by https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    margin: 0 auto;
    max-width: 1200px;
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    width: 100vw;
    text-rendering: optimizeLegibility;
    font-family: open Sans;
  }
  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;
  }
  div {
    text-align: center;
  }
  
`;
