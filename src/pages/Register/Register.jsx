import React, { useState } from 'react'
import './register.css'
import User from './img/user.svg'
import Lock from './img/lock.svg'
import Email from './img/mail.svg'
import Logo from './img/logo.svg'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import AuthDataService from '../../services/auth.service'

  

const SignupForm = () => {

    const [error, setError] = useState(false);
    const [fullName, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignin = (e) => {
        e.preventDefault()
        if(!password.length < 6){
        createUserWithEmailAndPassword(auth, email, password, fullName)
            .then((userCredential) => {
            const user = userCredential.user;
            AuthDataService.addUsers({fullName, email, password})
            })
            .catch((error) => {
                setError(true)
                setTimeout(() => {
                    setError(false)
                }, 3000);
            });      
        }
    };

    return (
        <div className='wrapper'>
            <div className="container">
                <header className="header">
                    <div className="header-logo">
                        <img src={Logo} alt="" />
                        <p className="header-text">Rival<span>CMS</span></p>
                    </div>
                    <div>
                        <Link to ='/login'><button className="header-button">Sign In</button></Link>
                    </div>
                </header>
            <h1 className='login_title'>Rival<span>CMS</span></h1>
            <div className="form__wrapper">
                <form onSubmit={handleSignin}>
                    <div className='form-container'>
                        <div className="user__container">
                            <div className="container-block">
                                <img className='container-icon' src={User} alt="" />
                                <p className="container-text">Full name</p>
                            </div>
                            <input
                                className='container-input'
                                id="fullName"
                                name="fullName"
                                type="text"
                                onChange={e=>setFullname(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='form-container'>
                        <div className="user__container">
                            <div className="container-block">
                                <img className='container-icon' src={Email} alt="" />
                                <p className="container-text">Email Address</p>
                            </div>
                            <input
                            className='container-input'
                            id="email"
                            name="email"
                            type="email"
                            onChange={e=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className='form-container'>
                        <div className="password__container">
                            <div className="container-block">
                                <img className='container-icon' src={Lock} alt="" />
                                <p className="container-text">Password</p>
                            </div>
                            <input
                                className='container-input'
                                id="password"
                                name="password"
                                type="password"
                                onChange={e=>setPassword(e.target.value)}
                                />
                        </div>
                        {error && <span className='wrong__message'> User has been existed or invalid password </span>}
                    </div>            
                    <button className='sign-button' type="submit">Submit</button>
                    
                </form>
            </div>
        </div>
    </div>
  );
};
export default SignupForm;
