import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: ${props => props.theme['gray-900']};
    height: 80px;
    /* margin-top: -80px; */

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    max-width: 1100px;
    width: 100%;
    height: 80px;
    padding: 0 24px;
    
    display: flex;
    justify-content: space-between;
    z-index: 1;
`

export const NavLogo = styled(Link)`
    color: ${props => props.theme.white};
    display: flex;
    align-items: center;
    justify-self: flex-start;
    /* cursor: pointer; */
    font-size: 1.5rem;
    margin: 0 0 0 24px;
    font-weight: bold;
    /* text-decoration: none; */
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 700px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${props => props.theme.white};
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin: 0 -1.375rem 0 0;

    @media screen and (max-width: 700px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(Link)`
    color: ${props => props.theme.white};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin: 0 0 0 1rem;

    @media screen and (max-width: 700px){
        display: none;
    }
`

export const NavBtnLink = styled.button`
    border-radius: 50px;
    background: ${props => props.theme["green-500"]};
    white-space: nowrap;
    padding: 10px 22px;
    color: ${props => props.theme["white"]};
    font-size: 1rem;
    font-weight: bold;

    outline: 0;
    border: 0;
    cursor: pointer;
    text-decoration: none;
    transition: all .2s ease-in-out;
    
    &:hover{
        transition: all .2s ease-in-out;
        background: ${props => props.theme["green-200"]};
    }
`
