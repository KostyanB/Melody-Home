import React from 'react';
import styled from 'styled-components';
import { Link } from '../Styled/Link';

const Item = styled.li`
    margin-bottom: 10px;
`;
const LinkApt = styled(Link)`
    font-size: 16px;
    line-height: 19px;
    color: #635854;
    :hover {
        color: #3596F5;
        text-decoration: underline;
    }
`;

const AptLink = ({ num, area, rooms, active, handle, show }) => (
        <Item>
            <LinkApt href="#"
                className={(active) && "active-link"}
                data-apt={num}
                onPointerOver={e => handle(e.target.dataset.apt)}
                onClick={() => show(num)}>
                    Kв. # {num}, {rooms} комн. {area} кв. м.
                </LinkApt>
        </Item>
)
export default AptLink;
