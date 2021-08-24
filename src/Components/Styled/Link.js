import styled from 'styled-components';

export const Item = styled.li`
text-align: center;
`;

export const Link = styled.a`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
`;

export const NavLink = styled(Link)`
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