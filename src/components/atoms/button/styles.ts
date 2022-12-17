import styled from "styled-components";

export const Container = styled.button`
    width: 300px;
    height: 45px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    background-color: #FFFFFF;
    display: flex;
    border: none;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    justify-content: center;
    align-items: center;
    color: #2148C0;

    :hover {
        background-color: azure;
        resize: 1.05%;
        cursor: pointer;
        border: none;
        font-size: 18px;
    }


    :active {
        background-color: #051845;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 1);
        transform: translateY(2px);
    }
`