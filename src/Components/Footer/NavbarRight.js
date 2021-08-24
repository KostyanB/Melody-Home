import React from 'react';
import styled from 'styled-components';
import { Item, NavLink } from '../Styled/Link';

const NavMenu = styled.ul`
    display: flex;
    justify-content: flex-end;
    padding: 0 10px;
    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-evenly;
        padding: 0;
    }
`;
const FootLinkRight = styled(NavLink)`
    color: #635854;
    text-decoration: underline;
    margin-left: 20px;
    text-align: center;
    @media (max-width: 768px) {
        margin-left: 0;
    }
`;

const NavItemRight = props => (
    <Item>
        <FootLinkRight href={props.link}>{props.name}</FootLinkRight>
    </Item>
)

const NavBarRight = () => (
        <NavMenu>
            <NavItemRight link="#" name="Политика конфиденциальности"/>
            <NavItemRight link="#" name="Публичная оферта"/>
            <NavItemRight link="#" name="Контакты"/>
        </NavMenu>
)
export default NavBarRight;