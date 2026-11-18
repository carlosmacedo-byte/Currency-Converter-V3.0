import styled from "styled-components";

// Estilização da página Home

export const Headers = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
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
    margin: 40px 400px 0px 500px;
`;

export const Text = styled.div`
    background: ${({ theme }) => theme.backgroundGradient};
    border: solid 1px ${({ theme }) => theme.borderMain};
    border-radius: 16px;
    width: 600px;
    height: 670px;
    padding: 16px;
    position: relative;
    bottom: 30px;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 1px 1px 10px 5px ${({ theme }) => theme.buttonShadow};
        border: solid 1px ${({ theme }) => theme.borderMain};
    }

    h1 {
        font-size: 50px;
        font-weight: 900;
        margin-bottom: 20px;
        text-align: center;
        color: ${({ theme }) => theme.textMain};
    }

    p {
        font-size: 18px;
        font-weight: 500;
        color: ${({ theme }) => theme.textMain};
    }
`;

export const CardMoney = styled.div`
    background: ${({ theme }) => theme.cardBackground};
    width: 355px;
    border-radius: 16px;
    padding: 16px;
    border: 1px solid ${({ theme }) => theme.borderMain};
    position: relative;
    bottom: 30px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        color: ${({ theme }) => theme.textSecondary};
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 11.2px;
    }

    select, input {
        width: 100%;
        padding: 8px 3.2px;
        margin-bottom: 8px;
        font-size: 12px;
        font-weight: 500;
        border-radius: 3.2px;
        border: 1px solid ${({ theme }) => theme.borderSecondary};
        cursor: pointer;
    }

    button {
        width: 100%;
        background-color: ${({ theme }) => theme.temaButtonBg};
        color: ${({ theme }) => theme.temaButtonText};
        padding: 8px 0;
        border: none;
        border-radius: 50px;
        margin: 8px 0 24px;
        font-size: 12px;
        font-weight: 900;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid ${({ theme }) => theme.borderMain};
        border-radius: 50px;
        padding: 16px;
        gap: 8px;

        img {
            width: 70px;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Img = styled.img`
    width: 60px;
`;

export const NameCurrency = styled.p`
    font-size: 11.2px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSecondary};
    margin: 3px 0 5px 0;
`;

export const ValueCurrency = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.textMain};
`;

export const CardCripto = styled.div`
    background: ${({ theme }) => theme.cardBackground};
    width: 355px;
    border-radius: 16px;
    padding: 16px;
    border: 1px solid ${({ theme }) => theme.borderMain};
    position: relative;
    bottom: 30px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        color: ${({ theme }) => theme.textSecondary};
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-size: 11.2px;
    }

    select, input {
        width: 100%;
        padding: 8px 3.2px;
        margin-bottom: 8px;
        font-size: 12px;
        font-weight: 500;
        border-radius: 3.2px;
        border: 1px solid ${({ theme }) => theme.borderSecondary};
        cursor: pointer;
    }

    button {
        width: 100%;
        background-color: ${({ theme }) => theme.temaButtonBg};
        color: ${({ theme }) => theme.temaButtonText};
        padding: 8px 0;
        border: none;
        border-radius: 50px;
        margin: 8px 0 24px;
        font-size: 12px;
        font-weight: 900;
        cursor: pointer;

        &:hover {
            opacity: 0.8;
        }
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid ${({ theme }) => theme.borderMain};
        border-radius: 50px;
        padding: 16px;
        gap: 8px;

        img {
            width: 70px;
        }
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
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
    position: relative;
    bottom: 18px;
`;

export const ConteinerHeaders = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
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