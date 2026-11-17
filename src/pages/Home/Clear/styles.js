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
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.7));
    border: solid 1px;
    border-color: #000000;
    border-radius: 16px;
    width: 600px;
    height:670px;
    padding: 16px;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 1px 1px 10px 5px rgba(000, 000, 000, 0.5);
        border: solid 1px;
        border-color: #000000;
    }

    h1 {
        font-size: 50px;
        font-weight: 900;
        margin-bottom: 20px;
        text-align: center;
        color: #000000;
    }

    p{
        font-size: 18px;
        font-weight: 500;
        color: #000000;
    }
`;

export const CardMoney = styled.div`
    background: #F4F4F4;
    width: 355px;
    border-radius: 16px;
    padding: 16px;
    border: 1px solid #000000;

    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        color:#777777;
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
        background-color: #000000;
        padding: 8px 0;
        border: none;
        border-radius: 50px;
        margin: 8px 0 24px;
        color: #ffffff;
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
    color: #777777;
    margin: 3px 0 5px 0;
`;

export const ValueCurrency = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: #000000;
`;

export const CardCripto = styled.div`
    background: #F4F4F4;
    width: 355px;
    border-radius: 16px;
    padding: 16px;
    border: 1px solid #000000;

    display: flex;
    flex-direction: column;
    gap: 10px;

    label {
        color:#777777;
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
        background-color: #000000;
        padding: 8px 0;
        border: none;
        border-radius: 50px;
        margin: 8px 0 24px;
        color: #ffffff;
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
    background: black;
    color: white;
    padding: 8px 16px;
    width: 50%;
    height: 100%;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 10px 0px 0px 10px;
    cursor: pointer;

        &:hover {
        background: #ffffff;
        color: black;
    }
`
export const ButtonClear = styled.button`
    background: black;
    color: white;
    padding: 8px 16px;
    width: 50%;
    height: 100%;
    font-weight: bold;
    font-size: 20px;
    border: none;
    border-radius: 0px 10px 10px 0px;
    cursor: pointer;

    &:hover {
        background: #ffffff;
        color: black;
    }
`