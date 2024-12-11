import {Component} from 'react'
import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'
import './index.css'

class LoginForm extends Component{

    state = {searchUsername: '', searchPassword: '', errmsg: ""}

    onchangeSearchInput = (event) => {
        this.setState({searchUsername: event.target.value})
    }

    onchangeSearchPassword = (event) => {
        this.setState({searchPassword: event.target.value})
    }


    renderUserNameField = () => {
        const {searchUsername} = this.state
        return(
        <>
            <label htmlFor='userName' className='labelEl'>USERNAME</label>
            <br />
            <input type="text" value={searchUsername} onChange={this.onchangeSearchInput} className='inputEl' placeholder='enter username' id="userName"/>
        </>
    )}
    
    renderPasswordField = () => {
        const {searchPassword} = this.state
        return(
        <>
            <label htmlFor='password' className='labelEl'>PASSOWRD</label>
            <br />
            <input type="password" value={searchPassword} onChange={this.onchangeSearchPassword} className='inputEl' placeholder='enter password' id="password"/>
        </>
    )}

    onSubmitSuccess = (jwtToken) => {
        Cookies.set('jwt_token', jwtToken, {expires: 2})
    }

    onsubmitFailure = (status) => {
        this.setState({errmsg: status})
    }

    onSubmitUserDetails = async (event) => {
        event.preventDefault()
        const {searchUsername, searchPassword} = this.state
        const userDetails = {username: searchUsername, password: searchPassword}
        const options = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(userDetails)
        }
        const response = await fetch("/login", options)
        if(response.ok){
            const fetchedData = await response.json()
            const {jwtToken} = fetchedData
            this.onSubmitSuccess(jwtToken)
        }
        else{
            const fetchedData = await response.json()
            this.onsubmitFailure(fetchedData.status)
        }
        
        this.setState({searchUsername: '', searchPassword: '', errmsg: ''})
    }

    render(){
        const {errmsg} = this.state
        const jwtToken = Cookies.get('jwt_token')
        if(jwtToken !== undefined){
            return <Navigate to="/" replace />
        }

        return(
            <div className='login-form-bg-container'>
                <div className='login-form-card-container'>
                    <h1 className='login-heading'>Login Form</h1>
                    <div className='login-form-sub-card-container'>
                        <img src='https://res.cloudinary.com/dh8g9mloe/image/upload/v1733834387/Untitled_vflv4z.png' alt="login" />
                        <form onSubmit={this.onSubmitUserDetails}>
                            {this.renderUserNameField()}<br />
                            {this.renderPasswordField()}
                            <div className='button-section'>
                                <button type="submit" className='login-btn'>Login</button>
                                <button type="button" className='register-btn'>Register</button>
                            </div>
                            <p className='error-msg'>{errmsg}</p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}



export default LoginForm