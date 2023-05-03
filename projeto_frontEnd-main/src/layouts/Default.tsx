import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'

export function Default() {
    return (
        <LayoutContainer>
            <Outlet />
        </LayoutContainer>
    )
}
