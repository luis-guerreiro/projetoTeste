import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { ListImages } from './ListImages/ListImages'

export function Library() {
    return (
        <>
            <Header />
            <div style={{ minHeight: '70vh' }}>
                <ListImages />
            </div>
            <Footer />
        </>
    )
}
