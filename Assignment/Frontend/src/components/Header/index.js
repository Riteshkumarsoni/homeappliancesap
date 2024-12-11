import Cookies from 'js-cookie'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Header = (props) => {
    const navigate = useNavigate()
    const onLogout = () => {
        Cookies.remove('jwt_token')
        navigate("/login")
    }
    return(
    <nav className="nav-container">
        <img src="https://res.cloudinary.com/dh8g9mloe/image/upload/v1733834444/blue_logo_z0miqo.png"
         alt="website logo" className="website-logo" />
        <div>
            <button type="button" className="bitz-btn">Biz Login</button>
            <button type="button" className="login-btn" onClick={onLogout}>Logout</button>
        </div>
    </nav>
)}

export default Header