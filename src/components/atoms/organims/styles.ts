import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 398px;
    display: flex;
    flex-direction: column;
` 

export const DivImg = styled.div`
    width: 100%;
    height: 98px;
    display: flex;
    justify-content: center;
`

export const ImgIcon = styled.img`
    width: 120px;
    height: 98px;
`

export const CaixaUser = styled.div`
    width: 100%;
    height: 45px;
    margin-top: 71px;
` 

export const CaixaPassword = styled.div`
    width: 100%;
    height: 45px;
    margin-top: 20px;
` 
export const CaixaLogin = styled.div`
    width: 100%;
    height: 45px;
    margin-top: 43px;

`

export const BoxForget = styled.div`
    width: 100%;
    height: 20px;
    margin-top: 11px;
    display: flex;
    justify-content: end;

    a {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;

        :hover {
        cursor: pointer;
        text-decoration: underline;
    }


    }


`
    