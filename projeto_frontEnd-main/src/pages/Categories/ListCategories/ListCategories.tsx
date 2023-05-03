import { useContext, useState } from 'react';
import { CategorieCard, CategorieCardContainer, CategorieCardGroupBtn, CategoriesContainer, CategoriesContent, SearchContainer } from './styles';
import { AuthContext } from '../../../contexts/AuthContext';
import { deletar } from '../../../services/Service';
import { useNavigate } from 'react-router-dom';
import { toastAlerta } from '../../../utils/toastAlerta';

export function ListCategories() {
    const { categories, getCategories, config, isAdmin } = useContext(AuthContext)

    const [search, setSearch] = useState<string>('')

    let navigate = useNavigate()

    const filteredCategories = search.length > 0
        ? categories.filter(categorie => categorie.descricao.includes(search))
        : []

    async function handleDelete(id: number) {
        try {
            await deletar(`/categories/${id}`, config)
            toastAlerta('Categoria apagada com sucesso', 'sucesso')
            getCategories()
        } catch (error) {
            toastAlerta('Erro ao apagar a Categoria', 'erro')
        }
    }

    function sendToUpdate(id: number) {
        navigate(`/newCategories/${id}`)
    }

    return (
        <>
            <CategoriesContainer>
                <SearchContainer>
                    <input
                        name='search'
                        type="text"
                        placeholder='Faça aqui sua busca por uma Categoria'
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />
                </SearchContainer>

                <CategoriesContent>
                    <CategorieCardContainer>
                        {
                            search.length > 0 ? (
                                filteredCategories.map(item => (
                                    <CategorieCard key={item.id}>
                                        <h3>{item.descricao}</h3>

                                        {isAdmin &&
                                            <CategorieCardGroupBtn>
                                                <button onClick={() => { sendToUpdate(item.id) }} >Atualizar</button>
                                                <button className='delete' onClick={() => { handleDelete(item.id) }}>Apagar</button>
                                            </CategorieCardGroupBtn>
                                        }

                                    </CategorieCard>
                                ))
                            ) : (
                                categories.map(item => (
                                    <CategorieCard key={item.id}>
                                        <h3>{item.descricao}</h3>

                                        {isAdmin &&
                                            <CategorieCardGroupBtn>
                                                <button onClick={() => { sendToUpdate(item.id) }} >Atualizar</button>
                                                <button className='delete' onClick={() => { handleDelete(item.id) }}>Apagar</button>
                                            </CategorieCardGroupBtn>
                                        }
                                    </CategorieCard>
                                ))
                            )
                        }
                    </CategorieCardContainer>
                </CategoriesContent>
            </CategoriesContainer>
        </>

    )
}
