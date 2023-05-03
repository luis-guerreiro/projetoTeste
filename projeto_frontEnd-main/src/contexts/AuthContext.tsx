import { ReactNode, createContext, useState, useEffect } from "react";

import { Usuario } from "../models/Usuario";
import { Categoria } from "../models/Categoria";
import { UsuarioLogin } from "../models/UsuarioLogin"
import { buscar, logar } from "../services/Service";
import { toastAlerta } from "../utils/toastAlerta";
import { ResponseImagem } from "../models/ResponseImagem";

interface AuthContextProps {
    images: ResponseImagem[]
    categories: Categoria[]
    config: Object
    configImage: Object
    isAdmin: boolean
    token: string
    logout(): void
    login(user: Usuario): Promise<void>
    getImages(): void
    getCategories(): void
}

interface AuthProviderProps {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<UsuarioLogin>({
        id: 0,
        nome: "",
        usuario: "",
        senha: "",
        foto: "",
        token: ""
    })

    const [images, setImages] = useState<ResponseImagem[]>([])

    const [categories, setCategories] = useState<Categoria[]>([])

    const config = {
        headers: {
            'Authorization': `${user.token}`
        }
    }
    
    const configImage = {
        headers: {
            'content-type': 'multipart/form-data',
            'Authorization': `${user.token}`
        }
    }

    let { token, usuario } = user

    let isAdmin = usuario === 'admin@user.com' ? true : false


    async function login(loginData: Usuario) {
        try {
            await logar(`/usuarios/logar`, loginData, setUser)
            toastAlerta("Usuário logado com sucesso", "sucesso")
        } catch (error) {
            console.log(error)
            toastAlerta("Dados do usuário inconsistentes", "erro")
        }
    }

    function logout() {
        setUser({
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""
        })
    }

    async function getImages() {
        try {
            await buscar('/images', setImages, {
                headers: {
                    'Authorization': `${user.token}`
                }
            })
        } catch (error) {
            console.log(error)
        }    
    }

    async function getCategories() {
        try {
            await buscar('/categories', setCategories, {
                headers: {
                    'Authorization': `${user.token}`
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        if (user.token !== "") {
            getImages()
            getCategories()
        }
    }, [user.token, categories.length, images.length])

    return (
        <AuthContext.Provider value={{ 
            images, 
            categories, 
            config, 
            isAdmin, 
            token, 
            configImage,
            login, 
            logout, 
            getCategories,
            getImages 
        }}>
            {children}
        </ AuthContext.Provider>
    )
}