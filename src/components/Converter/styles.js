import styled from "styled-components";

// Estilização do botão de conversão
export const ButtonConvert = styled.button`
    background: ${({ theme }) => theme.buttonBg};
    color: ${({ theme }) => theme.buttonText};
    padding: 8px 16px;
    width: 150px;
    height: 40px;
    font-weight: bold;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    position: relative;
    left: 50px;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 1px 1px 10px 5px ${({ theme }) => theme.buttonShadow};
        border: solid 2px;
        border-color: ${({ theme }) => theme.buttonHoverBorder};
    }
`