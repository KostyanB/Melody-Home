import React from 'react';
import styled from 'styled-components';
import Contacts from '../Styled/Contacts';
import logo from '../../img/logo-stroy.svg';
import NavBarRight from './NavbarRight';
import NavBarSoc from './NavbarSoc';

const Foot = styled.footer`
    background-color: #D7D7D7;
    padding: 50px 0;
    height: 170px;
    border-top: 4px solid #3596F5;

    @media (max-width: 768px) {
        padding: 20px 0;
    }
`;
const FootNavbar = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 16px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;
const LeftBlock = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
        margin-bottom: 20px;
    }
`;
const Logo = styled.a`
    width: 80px;
    height: 65px;
    background-color: transparent;
    background-image: url(${logo});
    margin-right: clamp(10px, 3%, 37px);
    background-size: cover;
    @media (max-width: 576px) {
        margin-right: 5px;
    }
`;

const Footer = () => (
        <Foot>
            <FootNavbar>
                <LeftBlock>
                    <Logo/>
                    <Contacts color="#635854" pos="flex-start"/>
                    <NavBarSoc/>
                </LeftBlock>
                <NavBarRight/>
            </FootNavbar>
        </Foot>
);
export default Footer;