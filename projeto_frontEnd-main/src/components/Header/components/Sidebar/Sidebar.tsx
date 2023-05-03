import { useNavigate } from "react-router-dom";
import { CloseIcon, Icon, SideBtnWrap, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { toastAlerta } from "../../../../utils/toastAlerta";

export interface SidebarProps {
    toggle: () => void
    isOpen: boolean
}

export function Sidebar({ isOpen, toggle }: SidebarProps) {
    let navigate = useNavigate()

    const { logout } = useContext(AuthContext)

    function handleLogout() {
        logout()
        toastAlerta('Usuário deslogado com sucesso', 'info')
        navigate('/')
    }

    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/home">Home</SidebarLink>
                    <SidebarLink to="/images">Biblioteca</SidebarLink>
                    <SidebarLink to="/categories">Categorias</SidebarLink>
                    <SidebarLink to="/newCategories">Cadastrar Categorias</SidebarLink>
                    <SidebarLink to="/newImages">Cadastrar Imagens</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute onClick={handleLogout}>Logout</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
