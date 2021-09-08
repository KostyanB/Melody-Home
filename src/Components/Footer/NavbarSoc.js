import React from 'react';
import styled from 'styled-components';
import { Link } from '../Styled/Link';
import { Icons } from '../SvgElems';

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
    display: flex;
    align-items: center;
    background-position-y: center;
    background-repeat: no-repeat;
    background-size: contain;
`;
const SocSvg = styled(Icons)`
    width: 100%;
    height: 100%;
    :hover {
        fill: #3595F6;
    }
`;

const NavBarSoc = () => {
    const names = ["facebook", "instagram", "twitter", "youtube"];
    return (
        <NavMenu>
            {names.map(item =>
                <SocLink href="#" key={item}>
                    <SocSvg name={item} fill="#635854"/>
                </SocLink>
            )}
        </NavMenu>
    )
}

export default NavBarSoc;