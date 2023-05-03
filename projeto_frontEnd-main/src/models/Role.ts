import { Usuario } from "./Usuario"

export interface Role{
    id: number
    nome: string
    usuario: Usuario[]
}