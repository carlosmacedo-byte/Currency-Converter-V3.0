import { FundoContainer } from './styles.js';

function Fundo({ children }) {
  return (
    <FundoContainer>
      {children}
    </FundoContainer>
  );
}

export default Fundo;
