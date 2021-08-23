import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Styled/Wrapper';
// import { Logo } from './Logo';
// import NavBar from './NavBar';
import Contacts from '../Styled/Contacts';
import logo from '../../img/logo-stroy.svg';


const Foot = styled.footer`
    background-color: #D7D7D7;
    padding: 50px 0;
    height: 170px;
    border-top: 4px solid #3596F5;
    @media (max-width: 768px) {
        padding: 6px 0;
    }
`;
const HeadWrap = styled(Wrapper)`
    @media (max-width: 768px) {
        grid-template-rows: repeat(2, 1fr);
        row-gap: 6px
    }
`;

const Logo = styled.a`
    grid-column: 1/span 1;
    align-self: center;
    width: 65px;
    height: 65px;
    background-color: transparent;
    background-image: url(${logo});

    /* @media (max-width: 768px) {
        grid-column: 1/span 4;
        grid-row: 1;
    } */
`;
const FootContact = styled.div`
    grid-column: 2/span 2;
    justify-self: start;
    /* @media (max-width: 768px) {
        grid-column: 5/span 8;
        grid-row: 1;
    } */
`;

const Footer = () => {

    return (
        <Foot>
        <Wrapper>
            <Logo/>
            <FootContact>
                <Contacts color="#635854" pos="flex-start"/>
            </FootContact>
        </Wrapper>


        </Foot>
    );
}
export default Footer;