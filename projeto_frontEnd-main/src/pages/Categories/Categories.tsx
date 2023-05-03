import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { ListCategories } from "./ListCategories/ListCategories";

export function Categories() {
    return (
        <>
            <Header />
                <div style={{ minHeight: '65vh' }}>
                    <ListCategories />
                </div>
            <Footer />
        </>
    )
}
