import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }

  /* Blinda as tags principais contra quebras de layout */
  body, html, #root {
    width: 100%;
    min-height: 100vh;
    overflow: hidden; /* Remove qualquer possibilidade de barra de rolagem */
  }

`