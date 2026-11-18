import styled from "styled-components";

// Importações corretas de ativos (dois níveis de recuo)
import SifraoOne from "../../assets/setasifrao.png";
import SifraoTwo from "../../assets/sifraotwo.png";

export const Seta = styled.img.attrs(({ theme }) => ({
  // Atribuímos o atributo "src" de forma dinâmica no próprio styled-component
  src: theme.backgroundMain === '#121212' ? SifraoTwo : SifraoOne,
  alt: "Indicador de conversão"
}))`
  width: 60px;
  height: auto; /* Garante que a altura se ajuste proporcionalmente */
  object-fit: contain; /* Preserva a proporção da imagem */
`;