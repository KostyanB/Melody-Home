import React from 'react';
import styled from 'styled-components';
import { HeadLink } from './HeadLink';

const NavMenu = styled.ul`
    grid-column: 3/span 8;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-evenly;
    padding: 0 10px;
    @media (max-width: 768px) {
        grid-column: 1/span 12;
        grid-row: 2;
        justify-content: space-between;
        padding: 0;
    }
`;
const Item = styled.li`
    text-align: center;
`;
const Link = styled(HeadLink)`
    font-size: 16px;
    line-height: 19px;
    :hover {
        color: #3595F6;
    }
    @media (max-width: 768px) {
        font-size: 14px;
        line-height: 16px;
    }
`;
const NavItem = props => (
    <Item>
        <Link href={props.link}>{props.name1}<br/>{props.name2}</Link>
    </Item>
)

const NavBar = () => (
        <NavMenu>
            <NavItem link="#" name1="Подобрать" name2="квартиру"/>
            <NavItem link="#" name1="Забронировать" name2="квартиру"/>
            <NavItem link="#" name1="Ход" name2="строительства"/>
            <NavItem link="#" name1="Проектная" name2="декларация"/>
        </NavMenu>
)
export default NavBar;