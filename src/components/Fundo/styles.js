import styled from "styled-components";

// 1. Importação com o caminho correto do Vite (apenas dois níveis de recuo)
import ImageClear from "../../assets/fundoclear.jpg";
import ImageDark from "../../assets/fundocurrency.png";

export const FundoContainer = styled.div`
  width: 100vw;
  height: 100vh;
  
  /* LÓGICA DE NEGÓCIO: Se o tema atual for o Escuro (#121212), usa a ImageDark. Senão, ImageClear */
  background-image: url(${({ theme }) => theme.backgroundMain === '#121212' ? ImageDark : ImageClear});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;