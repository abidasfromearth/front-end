import { Header } from '@widgets/header'
import { Outlet } from 'react-router-dom'
import { Footer } from '@widgets/footer'

export const Layout = () => {
    return (
        <>
            <Header />
            <main className="layout__content">
                <Outlet />
            </main>
            <Footer/>
        </>
    )
}

