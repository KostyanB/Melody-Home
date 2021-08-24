import React from 'react';
import styled from 'styled-components';
import { Link } from '../Styled/Link';
import facebookImg from '../../img/facebook.svg'
import instagramImg from '../../img/instagram.svg'
import twitterImg from '../../img/twitter.svg'
import youtubeImg from '../../img/youtube.svg'

const NavMenu = styled.ul`
    width: 125px;
    margin-left: clamp(5px, 5%, 60px);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    @media (max-width: 576px) {
        margin-left: 5px;
    }
`;
const SocLink = styled(Link)`
    width: 20px;
    height: 20px;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: contain;
`;
const FacebookLink = styled(SocLink)`
    background-image: url(${facebookImg});
`;
const InstagramLink = styled(SocLink)`
    background-image: url(${instagramImg});
`;
const TwitterLink = styled(SocLink)`
    background-image: url(${twitterImg});
`;
const YoutubeLink = styled(SocLink)`
    background-image: url(${youtubeImg});
`;

const NavBarSoc = () => (
        <NavMenu>
            <FacebookLink href="#"/>
            <InstagramLink href="#"/>
            <TwitterLink href="#"/>
            <YoutubeLink href="#"/>
        </NavMenu>
)
export default NavBarSoc;