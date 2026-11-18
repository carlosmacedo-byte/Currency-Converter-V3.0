import styled from "styled-components";

// Estilização da página de feedback

export const Headers = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`;

export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
`;

export const ButtonsMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    margin: 50px 400px 50px 500px;
`;

export const ConteinerHeaders = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
`;

export const Temas = styled.div`
    background: ${({ theme }) => theme.temaMenuBg};
    width: 100px;
    height: 50px;
    margin: 50px;
    border: none;
    border-radius: 9.9px;
    border-color: ${({ theme }) => theme.temaMenuBorder};
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonDark = styled.button`
    background: ${({ theme }) => theme.temaButtonBg};
    color: ${({ theme }) => theme.temaButtonText};
    padding: 8px 16px;
    width: 50%;
    height: 100%;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 10px 0px 0px 10px;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.temaButtonHoverBg};
        color: ${({ theme }) => theme.temaButtonHoverText};
    }
`;

export const ButtonClear = styled.button`
    background: ${({ theme }) => theme.temaButtonBg};
    color: ${({ theme }) => theme.temaButtonText};
    padding: 8px 16px;
    width: 50%;
    height: 100%;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.temaButtonHoverBg};
        color: ${({ theme }) => theme.temaButtonHoverText};
    }
`;

export const Caixa = styled.div`
    background: ${({ theme }) => theme.caixaBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 500px;
    border: 1px solid ${({ theme }) => theme.borderMain};
    border-radius: 15px;
    padding: 20px;
`;

export const Information = styled.textarea`
    width: 550px;
    height: 300px;
    border: 1px solid ${({ theme }) => theme.borderMain};
    background: ${({ theme }) => theme.inputBg};
    color: ${({ theme }) => theme.textMain};
    border-radius: 5px;
    padding: 10px;
    margin: 20px;
    resize: none;
    font-family: inherit;
`;

export const ButtonCaixa = styled.button`
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
    margin-top: 20px;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 1px 1px 10px 5px ${({ theme }) => theme.buttonShadow};
        border: solid 2px;
        border-color: ${({ theme }) => theme.buttonHoverBorder};
    }
`;

export const Text = styled.p`
    margin: 10px;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    line-height: 1.5;
    color: ${({ theme }) => theme.textInverted};
`;

export const Alert = styled.p`
    color: ${({ theme, $error }) => $error ? theme.alertError : theme.alertSuccess};
    font-weight: 800;
    font-size: 15px;
    margin: 10px 0;
    min-height: 20px; 
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
    text-align: center;
    letter-spacing: 0.5px;
`;