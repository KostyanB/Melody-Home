import styled from 'styled-components';

export const MainButton = styled.button`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    padding: 16px 36px;
    background-color: #3596F5;
    border-radius: 6px;
    font-size: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    color: #FFF;
    line-height: 19px;
    text-align: center;
    box-sizing: border-box;
    :hover {
        background-color: #635854;
        color:  #3596F5;
        box-sizing: border-box;
    }
`;