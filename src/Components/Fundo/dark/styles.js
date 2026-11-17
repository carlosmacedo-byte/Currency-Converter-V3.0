import styled from "styled-components";

export const Fundo = styled.div`
  width: 100vw;
  height: 100vh;
  
  /* Configurações de Fundo */
  background-image: url(${props => props.$bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  /* Flexbox para centralizar a futura calculadora no meio da tela */
`;