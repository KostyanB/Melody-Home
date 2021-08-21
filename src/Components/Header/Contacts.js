import React from 'react';
import styled from 'styled-components';
import { HeadLink } from './HeadLink';

const ContactWrap = styled.div`
    grid-column: 11/span 2;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    @media (max-width: 768px) {
        grid-column: 5/span 8;
        grid-row: 1;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
`;
const Text = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #FFFFFF;
    margin-bottom: 4px;
    @media (max-width: 900px) {
        font-size: 12px;
        line-height: 14px;
    }
    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 0;
    }
    @media (max-width: 480px) {
        display: none;
    }
`;
const LinkTel = styled(HeadLink)`
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    @media (max-width: 900px) {
        font-size: 14px;
        line-height: 16px;
    }
    @media (max-width: 768px) {
        font-size: 17px;
        line-height: 20px;
        margin-left: 10px;
    }
`;


const Contacts = () => (
    <ContactWrap>
        <Text>Закажите звонок:</Text>
        <LinkTel href="tel: +784312345-67">8 (843) 123-45-67</LinkTel>
    </ContactWrap>


)
export default Contacts;