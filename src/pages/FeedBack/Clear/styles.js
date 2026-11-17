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
    margin: 50px;
    margin: 50px 400px 50px 500px;
`

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

export const Caixa = styled.div`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    height: 500px;
    border: 1px solid black;
    border-radius: 15px;
    padding: 20px;
`

// Substituímos styled.input por styled.textarea
export const Information = styled.textarea`
  width: 550px;
  height: 300px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  margin: 20px;
  resize: none; /* Trava o tamanho para o usuário não quebrar o layout do site */
  font-family: inherit; /* Puxa a mesma fonte do GlobalStyles */
`

export const ButtonCaixa = styled.button`
    background: linear-gradient(to bottom, rgba(0, 0, 0, 1), transparent);
    color: white;
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
        box-shadow: 1px 1px 10px 5px rgba(104, 104, 104, 0.6);
        border: solid 2px;
        border-color: #000000;
    }
`

export const Text = styled.p`
    margin: 10px;
    text-align: center;
    font-size: 15px;
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    line-height: 1.5;
    color: white;
`
export const Alert = styled.p`
    color: ${props => props.$error ? '#ff4d4d' : '#4ade80'}; /* Vermelho e Verde neon modernos */
    font-weight: 800;
    font-size: 15px;
    margin: 10px 0;
    min-height: 20px; 
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9); /* Cria contraste em cima do fundo escuro */
    text-align: center;
    letter-spacing: 0.5px;
    `