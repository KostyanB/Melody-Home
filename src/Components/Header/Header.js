import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Styled/Wrapper';
import { Logo } from './Logo';
import NavBar from './NavBar';
import Contacts from './Contacts';


const Head = styled.header`
    background-color: #635854;
    padding: 12px 0;
    border-bottom: 4px solid #3596F5;
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


const Header = () => {

    return (
        <>
        <Head>
            <HeadWrap>
                <Logo/>
                <NavBar/>
                <Contacts/>
            </HeadWrap>
        </Head>

        </>
    );
}
export default Header;