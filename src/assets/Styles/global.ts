import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    min-height: 100vh;
  }

  body {
    background: #4C5C68;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

`;
