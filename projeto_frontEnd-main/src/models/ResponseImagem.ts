import { Categoria } from "./Categoria"

export interface ResponseImagem{
    id: string
    name: string
    url: string
    size: number
    descricao: string
    categorias: Categoria[]
}