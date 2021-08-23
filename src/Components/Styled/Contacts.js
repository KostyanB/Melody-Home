import React from 'react';
import styled from 'styled-components';
import { Link } from '../Styled/Link';

const ContactWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    min-width: 145px;

    @media (max-width: 768px) {
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
    color: inherit;
    text-align: center;
    margin-bottom: 4px;
    width: fit-content;

    @media (max-width: 768px) {
        margin-bottom: 0;
    }

    @media (max-width: 480px) {
        display: none;
    }
`;
const LinkTel = styled(Link)`
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    /* color: inherit; */
    :hover {
        color: #3595F6 !important;
    }
    @media (max-width: 768px) {
        margin-left: 10px;
    }
`;

const Contacts = ({ color, pos }) => (
    <ContactWrap style={{ alignItems: `${pos}` }}>
        <Text style={{ color: `${color}` }}>Закажите звонок:</Text>
        <LinkTel href="tel: +784312345-67" style={{ color: `${color}` }}>8 (843) 123-45-67</LinkTel>
    </ContactWrap>
)
export default Contacts;