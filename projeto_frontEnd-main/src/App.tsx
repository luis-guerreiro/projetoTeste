import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './contexts/AuthContext'

import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Default } from './layouts/Default'
import { Library } from './pages/Library/Library'
import { NewImages } from './pages/Library/NewImages/NewImages'
import { NewCategories } from './pages/Categories/NewCategories/NewCategories'

import { defaultTheme } from './styles/themes/default'

import 'react-toastify/dist/ReactToastify.css';
import { Categories } from './pages/Categories/Categories'

export function App() {

    return (
        <AuthProvider>
            <ToastContainer />
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={< Default />}>
                            <Route path='/' element={< Login />} />
                            <Route path='/home' element={< Home />} />
                            <Route path='/images' element={< Library />} />
                            <Route path='/categories' element={< Categories />} />
                            <Route path='/newCategories' element={< NewCategories />} />
                            <Route path='/newCategories/:id' element={< NewCategories />} />
                            <Route path='/newImages' element={< NewImages />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </AuthProvider>
    )
}