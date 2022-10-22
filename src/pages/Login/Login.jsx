import React, { useState } from 'react'
import './login.css'
import Lock from './img/lock.svg'
import Email from './img/mail.svg'
import { Link } from 'react-router-dom'
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../../firebase-config";


export const Login = () => {
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault()

        signInWithEmailAndPassword (auth, email, password)
            .then((userCredential) => {
            const user = userCredential.user;
            window.location = '/dashboard';
            })
            .catch((error) => {
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000);
            });
    }
  return ( 
    <div className='wrapper'>
        <div className="container">
        <h1 className='login_title'>Rival<span>CMS</span></h1>
        <div className="form__wrapper">
            <form onSubmit={handleLogin}>
                <div className='form-container'>
                    <div className="container-block">
                        <img className='container-icon' src={Email} alt="" />
                        <p className="container-text">Email address</p>
                    </div>
                    <input 
                    className={error ? "wrong" : 'container-input'}
                    type="email" 
                    name="email" 
                    id="email" 
                    onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className='form-container'>
                    <div className="container-block">
                        <img className='container-icon' src={Lock} alt="" />
                        <p className="container-text">Password</p>
                    </div>
                    <input 
                    className={error ? "wrong" : 'container-input'}
                    type="password" 
                    name="password" 
                    id="password" 
                    onChange={e=>setPassword(e.target.value)}/>
                </div>                
                {error && <span className='wrong__message'>Wrong Email or password</span>}
                <div className="button__container">
                    <p className='button__container-forgot'>Forgot password?</p>
                    <button className='sign-button' type="submit">Sign in</button>
                </div>
                <div className="button__registery">
                    <Link to='/register'>
                        <button className="registry-button">Don’t have & account?</button>
                    </Link>
                </div>
            </form>
        </div>
    </div>
</div>
)};
export default Login;