import styled from "styled-components";

export const Headers = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
`
export const Body = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
`

export const ButtonsMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    margin: 50px 400px 50px 500px;
`

export const Text = styled.div`
    background: linear-gradient(to bottom, rgba(000, 000, 000, 1), transparent);
    border: solid 1px;
    border-color: #F4F4F4;
    border-radius: 16px;
    width: 600px;
    height:670px;
    padding: 16px;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 1px 1px 10px 5px rgba(255, 255, 255, 0.8);
        border: solid 1px;
        border-color: #ffffff;
    }

    h1 {
        font-size: 50px;
        font-weight: 900;
        margin-bottom: 20px;
        text-align: center;
        color: #ffffff;
    }

    p{
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
    }
`;

export const CardMoney = styled.div`
    background: rgba(111, 111, 111, 0.9);
    width: 355px;
    border-radius: 16px;
    padding: 16px;
    border: 1px solid #ffffff;

    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        color:#ffffff;
        font-family: Roboto;
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
        border: 1px solid #bbbbbb;
        cursor: pointer;
    }

    button {
        width: 100%;
        background-color: #ffffff;
        padding: 8px 0;
        border: none;
        border-radius: 50px;
        margin: 8px 0 24px;
        color: #000000;
        font-size: 12px;
        font-weight: 900;
        cursor: pointer;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #000000;
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
`

export const NameCurrency = styled.p`
    font-size: 11.2px;
    font-weight: 400;
    color: #ffffff;
    margin: 3px 0 5px 0;
`;

export const ValueCurrency = styled.p`
    font-size: 16px;
    font-weight: 600;
`;

export const CardCripto = styled.div`
    background-color: rgba(111, 111, 111, 0.9);
    width: 355px;
    border-radius: 16px;
    padding: 16px;
    border: 1px solid #ffffff;

    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        color:#ffffff;
        font-family: Roboto;
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
        border: 1px solid #bbbbbb;
        cursor: pointer;
    }

    button {
        width: 100%;
        background-color: #ffffff;
        padding: 8px 0;
        border: none;
        border-radius: 50px;
        margin: 8px 0 24px;
        color: #000000;
        font-size: 12px;
        font-weight: 900;
        cursor: pointer;
    }

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #000000;
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
    background: black;
    width: 100px;
    height:50px;
    margin: 50px;
    border: none;
    border-radius: 9.9px;
    border-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const ConteinerHeaders = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;

`

export const ButtonDark = styled.button`
    background: white;
    color: black;
    padding: 8px 16px;
    width: 50%;
    height: 100%;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 10px 0px 0px 10px;
    cursor: pointer;

        &:hover {
        background: #000000;
        color: white;
    }
`
export const ButtonClear = styled.button`
    background: white;
    color: black;
    padding: 8px 16px;
    width: 50%;
    height: 100%;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;

    &:hover {
        background: #000000;
        color: white;
    }
`