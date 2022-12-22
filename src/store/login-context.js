import { createContext, useState } from "react";



const LoginContext = createContext(
    {
        isLogged: false,
        signin: () => { },
        signup: () => { },
        signout: () => { },
        verifyLogged: () => { }
    }
)


export function LoginContextProvider(props) {
    const [isLogged, setIsLogged] = useState(false);

    function seConnecter(identifiants) {
        fetch('http://localhost:3000/auth/login',
            {
                method: 'POST',
                body: JSON.stringify(identifiants),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('mytoken', data['token']);
                setIsLogged(true);

            })
            .catch(err => {
                console.log(err);

            })
    }

    function inscription(identifiants) {
        fetch('http://localhost:3000/auth/register',
            {
                method: 'POST',
                body: JSON.stringify(identifiants),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Inscription Réussie')
                //setIsLogged(true);
            })
            .catch(err => {
                console.log(err);
            })

    }

    function verifyLogged() {
        let token = localStorage.getItem('mytoken');
        console.log(token);
        if (token)
            return true;
        return false;
    }




    const context = {
        isLogged: isLogged,
        signin: seConnecter,
        signup: inscription,
        signout: () => { },
        verifyLogged: verifyLogged
    }
    return <LoginContext.Provider value={context}>
        {props.children}
    </LoginContext.Provider>
}

export default LoginContext;