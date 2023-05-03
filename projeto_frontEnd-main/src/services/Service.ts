import axios from 'axios'

export const conexao = axios.create({
    baseURL: 'http://localhost:8080'
})

export const logar = async(url: string, dados: Object, setDados: Function) => {
    const resposta = await conexao.post(url, dados)
    setDados(resposta.data)
}

export const buscar = async(url: string, setDados: Function, header: Object) => {
    const resposta = await conexao.get(url, header)
    setDados(resposta.data)
}

export const cadastrar = async(url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await conexao.post(url, dados, header)
    setDados(resposta.data)
}

export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
    const resposta = await conexao.put(url, dados, header)
    setDados(resposta.data)
}

export const deletar = async(url: string, header: Object) => {
    await conexao.delete(url, header)
}