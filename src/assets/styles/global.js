import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: #F6F5FC;
    color: #222222;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
    
`;
