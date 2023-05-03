import { FormImages } from '../components/FormImages/FormImages';
import { Header } from '../../../components/Header/Header';
import { LibraryContainer } from './styles';
import { Footer } from '../../../components/Footer/Footer';

export function NewImages() {
    return (
        <>
            <Header />

            <LibraryContainer>
                <FormImages />
            </LibraryContainer>

            <Footer />
        </>
    )
}
