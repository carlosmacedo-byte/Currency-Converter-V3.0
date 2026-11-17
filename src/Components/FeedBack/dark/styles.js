import styled from "styled-components";

export const ButtonFeedback = styled.button`
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), transparent);
    color: white;
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
        box-shadow: 1px 1px 10px 5px rgba(255, 255, 255, 0.8);
        border: solid 2px;
        border-color: #ffffff;
        }
    `