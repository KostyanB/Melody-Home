import React from 'react';
import styled from 'styled-components';
import Wrapper from '../Styled/Wrapper';
import { Logo } from './Logo';
import NavBar from './NavBar';
import Contacts from '../Styled/Contacts';


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
const HeadContact = styled.div`
    grid-column: 11/span 2;
    justify-self: end;
    @media (max-width: 768px) {
        grid-column: 5/span 8;
        grid-row: 1;
    }
`;

const Header = () => {

    return (
        <>
        <Head>
            <HeadWrap>
                <Logo/>
                <NavBar/>
                <HeadContact>
                    <Contacts color="#fff" pos="flex-end"/>
                </HeadContact>

            </HeadWrap>
        </Head>

        </>
    );
}
export default Header;