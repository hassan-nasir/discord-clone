import React from 'react'
import './Login.css'
import {Button} from '@material-ui/core'
import {auth,provider} from '../../Config/Firebase'

function Login() {
    const SignIn = () => {
        auth.signInWithPopup(provider)
            .catch((error)=>{alert(error.message)})
    }
    return (
        <div className="login">
            <div className="login_img">
                <img 
                    src="https://download.logo.wine/logo/Discord_(software)/Discord_(software)-Logo.wine.png"
                    alt="Discord Logo" />
            </div>
            <Button onClick={SignIn} >Sign In</Button>
        </div>
    )
}

export default Login
