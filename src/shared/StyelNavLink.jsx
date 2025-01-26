import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


export const Info = styled.div`
    height: auto;  
    background-color: #E2E8ED;
`;

export const Text = styled.p`
    text-align: justify;
    font-size: 23px;
`;

export const StyledNavLink = styled(NavLink)`
    font-size: 25px;
    font-style: normal;
    color: #535353;
    float: left;
    text-decoration: none;
    transition: color 600ms ease;
    width: fit-content;

    &:hover {
        color: #DB6B4D;
        border-bottom: 0px solid #DB6B4D;    
    }
`;

export const Styleh1 = styled.h1`
    font-size: 1.5em;
`;

export const Styleda = styled.a`
    text-decoration: none;
    color: #535353;

    &:hover {
        color: #DB6B4D;
        border-bottom: 0px;    
    }
`;

export const CapLetters = styled.h1`
    font-size: 50px;
    font-style: italic;
    color: #535353;
    padding-top: 30px;
    margin: 0;
`

export const Styledp = styled.p`
font-size: 23px;
`;

export const Osnova = styled.div`
    margin-top: 1.5%;
    padding: 0 160px;
`;