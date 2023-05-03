import { useNavigate } from "react-router-dom";
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from "./styles";
import { FaBars } from 'react-icons/fa'
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { toastAlerta } from "../../../../utils/toastAlerta";

export interface NavbarProps{
    toggle: () => void
}

export function Navbar({ toggle }: NavbarProps) {
    let navigate = useNavigate()

    const { logout } = useContext(AuthContext)

    function handleLogout() {
        logout()
        toastAlerta('Usuário deslogado com sucesso', 'info')
        navigate('/')
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/home">Awesome Images</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="/images">Biblioteca</NavLinks>
                        </NavItem> 

                        <NavItem>
                            <NavLinks to="/categories">Categorias</NavLinks>
                        </NavItem>  

                        <NavItem>
                            <NavLinks to="/newCategories">Cadastrar Categorias</NavLinks>
                        </NavItem> 

                        <NavItem>
                            <NavLinks to="/newImages">Cadastrar Imagens</NavLinks>
                        </NavItem> 
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}