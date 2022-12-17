import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 45px;
    border: 1px solid #FFFFFF;
    border-radius: 4px;
    display: flex;
    align-items: center;
`

export const Lock = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 12px;
`

export const Password = styled.input`
    width: 230px;
    height: 20px;
    margin-left: 19px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;

    ::placeholder {
    color: #FFFFFF;
}
`