import { Imagem } from "./Imagem"

export interface Categoria{
    id: number
    descricao: string
    imagem: Imagem | null
}