import { ChangeEvent, useContext, useEffect, useState } from 'react'
import { Button, Form, FormContainer, GroupFields, Input, Label, SectionTitle } from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { Categoria } from '../../../../models/Categoria'
import { atualizar, buscar, cadastrar } from '../../../../services/Service'
import { toastAlerta } from '../../../../utils/toastAlerta'
import { AuthContext } from '../../../../contexts/AuthContext'

export function FormCategories() {
    const { getCategories, config } = useContext(AuthContext)

    const [category, setCategory] = useState<Categoria>({} as Categoria)

    const { id } = useParams<string>()

    let navigate = useNavigate()
    const isUpdate = id !== undefined

    useEffect(() => {
        if (isUpdate) getCategorieById(id)
    }, [id])

    async function getCategorieById(id: string) {
        try {
            await buscar(`categories/${id}`, setCategory, config)
        } catch (error) {
            console.log(error)
        }
    }

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setCategory({
            ...category,
            [e.target.name]: e.target.value
        })
    }

    async function createNewCategorie(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (isUpdate) {
            try {
                await atualizar(`/categories`, category, setCategory, config)
                toastAlerta('Categoria atualizada com sucesso', 'sucesso')
                getCategories()
                navigate("/categories")

            } catch (error) {
                toastAlerta('Erro ao atualizar a Categoria', 'erro')
            }

        } else {
            try {
                await cadastrar(`/categories`, category, setCategory, config)

                toastAlerta('Categoria cadastrada com sucesso', 'sucesso')
                getCategories()
                navigate("/categories")

            } catch (error) {
                console.log(error)
                toastAlerta('Erro ao cadastrado a Categoria', 'erro')
            }

        }
    }

    return (
        <FormContainer>
            <SectionTitle>
                <h1>Categoria</h1>

                {isUpdate ? 
                    <h3>Atualize a Categoria</h3> :
                    <h3>Insira uma nova Categoria</h3>
                }
            </SectionTitle>

            <Form onSubmit={createNewCategorie}>
                <GroupFields>
                    <Label htmlFor="descricao">Nome da Categoria</Label>
                    <Input
                        type="text"
                        id="descricao"
                        name="descricao"
                        value={category.descricao}
                        placeholder="Insira no mínimo 5 caracteres"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        required />
                </GroupFields>

                {isUpdate ?
                    <Button type="submit">Atualizar</Button> :
                    <Button type="submit">Cadastrar</Button>
                }

            </Form>
        </FormContainer>
    )
}
