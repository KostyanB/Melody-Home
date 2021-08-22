import styled from 'styled-components';
import logo from '../../img/logo.svg';
import logo2 from '../../img/logo2.svg';

export const Logo = styled.a`
    grid-column: 1/span 2;
    align-self: center;
    width: 120px;
    height: 33px;
    background-color: transparent;
    background-image: url(${logo});
    :hover {
        background-image: url(${logo2});
    }
    @media (max-width: 768px) {
        grid-column: 1/span 4;
        grid-row: 1;
    }
`;