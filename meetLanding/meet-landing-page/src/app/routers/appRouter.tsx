import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from 'app/layout'
import { HomePage } from '@pages/home/ui'

export const AppRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    </BrowserRouter>
}