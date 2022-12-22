


import React, { useContext, useRef, useState } from 'react'
import LoginContext from '../store/login-context';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [showSignin, setShowSignin] = useState(true);
    const login = useRef();
    const mdp = useRef();
    const LogCtx = useContext(LoginContext);
    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault();
        if (showSignin) {
            LogCtx.signin(
                {
                    email: login.current.value,
                    password: mdp.current.value
                }
            );
            // setShowSignin(false);

            if (LogCtx.verifyLogged()) {
                navigate("/cv");
            }



        }
        else {
            LogCtx.signup(
                {
                    email: login.current.value,
                    password: mdp.current.value
                }
            )
        }
    }


    return (
        <div className='container'>

            <form onSubmit={submitHandler}>
                <label>Login</label>
                <input className='form-control' type='text' ref={login}></input>
                <label>Mot de passe</label>
                <input className='form-control' type='text' ref={mdp}></input>

                <button style={{ width: '18%', margin: '5% 5%' }} type="submit" className={showSignin ? 'btn btn-success' : 'btn btn-danger'} > {showSignin ? 'Sign in' : 'Sign Up'}</button>
                <button style={{ width: '18%' }} type='button' onClick={() => {

                    setShowSignin((prev) => {
                        return !prev
                    })
                }} className='btn btn-info'>{showSignin ? 'Swith to Sign up' : 'Swith to Sign in'}</button>
            </form>
        </div >
    )
}

export default Login