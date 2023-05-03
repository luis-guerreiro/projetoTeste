import { ChangeEvent, useState, useContext, useEffect } from 'react'
import { Button, ButtonContainer, CatagoriesImageContainer, CategoriesSelected, Form, FormContainer, GroupFields, Input, Label, SectionTitle } from './styles'
import { cadastrar } from '../../../../services/Service'
import { Imagem } from '../../../../models/Imagem'
import { AuthContext } from '../../../../contexts/AuthContext'
import { toastAlerta } from '../../../../utils/toastAlerta'
import { useNavigate } from 'react-router-dom'

export function FormImages() {
    const { categories, configImage, getImages } = useContext(AuthContext)

    const [image, setImage] = useState<Imagem>({} as Imagem)

    const [imagesStaging, setImagesStaging] = useState<Imagem[]>([])

    const [categoriesSelected, setCategoriesSelected] = useState<string[]>([])

    const [data, setData] = useState<File | null>()

    let navigate = useNavigate()

    useEffect(() => {
        setImage({
            ...image,
            categorias: categoriesSelected.toString(),
            data: data
        })
    }, [categoriesSelected, data])

    function updateState(e: ChangeEvent<HTMLInputElement>) {
        setImage({
            ...image,
            [e.target.name]: e.target.value,
            categorias: categoriesSelected.toString()
        })
    }

    function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
        if (!e.target.files) {
            return
        } else {
            const sizeFile = e.target.files[0].size
            const sizeAllowed = 20971520

            if (sizeFile <= sizeAllowed) {
                setData(e.target.files[0]);
            } else {
                toastAlerta("Tamanho da Imagem é superior a 20Mb", "erro")
                e.target.value = ""
            }
        }

        const formData: any = new FormData()
        formData.append('data', data)
    }

    function handleAddMoreImagens() {
        setImagesStaging(state => [...state, image])
        setImage({
            id: "",
            nome: "",
            descricao: "",
            data: null,
            deleted: false,
            categorias: ""
        })

    }

    async function handleCategoriesSelected(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        e.currentTarget.disabled = true

        const element = e.target as HTMLButtonElement

        setCategoriesSelected([...categoriesSelected, element.value])
    }

    async function uploadImage(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setImagesStaging(state => [...state, image])
        console.log(imagesStaging)

        try {
            for (let i = 0; i < imagesStaging.length; i++) {                
                // console.log("hi")
                // console.log(imagesStaging[i])
                await cadastrar(`/images`, imagesStaging[i], setImage, configImage)
                toastAlerta("Imagem(ns) cadastrada(s) com Sucesso", 'sucesso')
                navigate('/images')
            }

        } catch (error) {
            console.log(error)
            toastAlerta("Imagem(ns) não cadastrada(s), tente novamente", 'error')
        }

        getImages()

    }


    return (
        <FormContainer>
            <SectionTitle>
                <h1>Imagens</h1>
                <h3>Insira uma ou mais Imagens</h3>
            </SectionTitle>

            <Form onSubmit={uploadImage}>
                <GroupFields>
                    <Label htmlFor="nome">Título</Label>
                    <Input
                        id="nome"
                        name="nome"
                        type="text"
                        value={image.nome}
                        placeholder="Insira o título"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        required />
                </GroupFields>

                <GroupFields>
                    <Label htmlFor="descricao">Descrição</Label>
                    <Input
                        id="descricao"
                        type="text"
                        name="descricao"
                        value={image.descricao}
                        placeholder="Insira a descrição"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => updateState(e)}
                        required />
                </GroupFields>

                <GroupFields>
                    <Label htmlFor="data">Imagem</Label>
                    <Input
                        id="data"
                        name='data'
                        type="file"
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleFileChange(e)}
                        placeholder="Insira a imagem"
                        accept=".png, .jpeg, .gif"
                        required />
                </GroupFields>

                <CatagoriesImageContainer>
                    <CategoriesSelected>
                        {
                            categories.map(item => (
                                <button
                                    type='button'
                                    key={item.id}
                                    value={item.id}
                                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleCategoriesSelected(e)}
                                >
                                    {item.descricao}
                                </button>
                            ))
                        }
                    </CategoriesSelected>

                </CatagoriesImageContainer>

                <ButtonContainer>
                    <Button type="submit">Salvar Tudo</Button>
                    <Button type="button" onClick={handleAddMoreImagens}>Cadastrar mais imagens</Button>
                </ButtonContainer>
            </Form>
        </FormContainer>
    )
}
