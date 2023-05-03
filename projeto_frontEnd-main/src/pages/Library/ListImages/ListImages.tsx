import { useContext } from 'react';
import { ImageCard, ImageCardContainer, ImageCardGroupBtn, ImageDescription, ImagesContainer, ImagesContent } from './styles';
import { AuthContext } from '../../../contexts/AuthContext';
import { deletar } from '../../../services/Service';
import { ResponseImagem } from '../../../models/ResponseImagem';
import { CatagoriesImageContainer, CategoriesSelected } from '../components/FormImages/styles';
import { toastAlerta } from '../../../utils/toastAlerta';

interface ListImagesProps {
    state?: string
    listFiltered?: ResponseImagem[]
}

export function ListImages({ listFiltered, state }: ListImagesProps) {
    const { images, config, getImages, isAdmin } = useContext(AuthContext)

    async function handleDelete(id: string) {
        try {
            await deletar(`/images/${id}`, config)
            toastAlerta('Categoria apagada com sucesso', 'sucesso')
            getImages()
        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro')
        }
    }

    console.log(images)

    return (
        <>
            <ImagesContainer>
                <ImagesContent>
                    <ImageCardContainer>
                        {
                            state !== undefined && state.length > 0 ? (
                                listFiltered?.map(item => (
                                    <ImageCard key={item.id}>
                                        <img src={item.url} alt={item.name} />
                                        <ImageDescription>
                                            <h3>{item.name}</h3>
                                            <p>{item.descricao}</p>
                                        </ImageDescription>

                                        <CatagoriesImageContainer>
                                            <CategoriesSelected>
                                                {
                                                    item.categorias.map(categoria => (
                                                        <span>{categoria.descricao}</span>
                                                    ))
                                                }
                                            </CategoriesSelected>

                                        </CatagoriesImageContainer>

                                        {isAdmin &&
                                            <ImageCardGroupBtn>
                                                <button className='delete' onClick={() => { handleDelete(item.id) }}>Apagar</button>
                                            </ImageCardGroupBtn>
                                        }
                                    </ImageCard>
                                ))
                            ) : (
                                images.map(item => (
                                    <ImageCard>
                                        <img src={item.url} alt={item.name} />
                                        <ImageDescription>
                                            <h3>{item.name}</h3>
                                            <p>{item.descricao}</p>
                                        </ImageDescription>

                                        <CatagoriesImageContainer>
                                            <CategoriesSelected>
                                                {
                                                    item.categorias.map(categoria => (
                                                        <span>{categoria.descricao}</span>
                                                    ))
                                                }
                                            </CategoriesSelected>

                                        </CatagoriesImageContainer>

                                        {isAdmin &&
                                            <ImageCardGroupBtn>
                                                <button className='delete' onClick={() => { handleDelete(item.id) }}>Apagar</button>
                                            </ImageCardGroupBtn>
                                        }
                                    </ImageCard>
                                ))
                            )
                        }
                    </ImageCardContainer>
                </ImagesContent>
            </ImagesContainer>
        </>
    )
}
