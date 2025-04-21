import ReactDOM from 'react-dom/client'
import './app/styles/index.css'
import './app/styles/variables.scss'
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <App />,
)

