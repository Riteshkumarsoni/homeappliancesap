import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'


const App = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path='/login' Component={LoginForm} />
            <Route Component={NotFound} />
        </Routes>
    </BrowserRouter>
)
export default App