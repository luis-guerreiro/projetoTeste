import { CategoriesContainer } from '../ListCategories/styles';
import { FormCategories } from '../components/FormCategories/FormCategories';
import { Header } from '../../../components/Header/Header';
import { Footer } from '../../../components/Footer/Footer';

export function NewCategories() {
    return (
        <>
            <Header />
            <div style={{ minHeight: '65vh' }}>
                <CategoriesContainer>
                    <FormCategories />
                </CategoriesContainer>
            </div>
            <Footer />
        </>

    )
}
