import { useContext, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { AuthContext } from '../../contexts/AuthContext';
import { ListImages } from '../Library/ListImages/ListImages';
import { HomeSection } from './components/HomeSection/HomeSection';
import { ListImagesSection } from './styles';
import { Footer } from '../../components/Footer/Footer';

export function Home() {
    const { images } = useContext(AuthContext)

    const [search, setSearch] = useState<string>('')

    const filteredImages = search.length > 0
        ? images.filter(image => image.name.includes(search))
        : []

    return (
        <>
            <Header />
            <HomeSection state={search} setState={setSearch} />
            <ListImagesSection>
                <ListImages state={search} listFiltered={filteredImages}/> 
            </ListImagesSection>
            <Footer />
        </>
    )
}
