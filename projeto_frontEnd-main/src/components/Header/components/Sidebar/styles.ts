import styled from "styled-components";
import { FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";

interface SidebarContainerProps{
    isOpen: boolean
}

export const SidebarContainer = styled.aside<SidebarContainerProps>`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${props => props.theme['gray-900']};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: ${props => props.theme.white};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.2rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: ${props => props.theme.white};
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;


    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out;
    text-decoration: none;
    color: ${props => props.theme.white};
    cursor: pointer;

    &:hover{
        color: ${props => props.theme["green-200"]};
        transition: .2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled.button`
    border-radius: 50px;
    background: ${props => props.theme["green-200"]};
    white-space: nowrap;
    padding: 16px 64px;
    color: ${props => props.theme["gray-900"]};
    font-size: 1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all .2s ease-in-out;
        background: ${props => props.theme.white};
        color: ${props => props.theme["gray-900"]};
    }
`