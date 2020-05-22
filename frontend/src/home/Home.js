import React, { useState } from 'react';

import './Home.css';

function Login() {
    const [name, setName] = useState('');
    const [auth, setAuth] = useState(false);
    const [nameIsEmpty, setNameIsEmpty] = useState(false);

    const handleLogin = () => {
        if (!name.trim()) {
            setNameIsEmpty(true);
        }
        else {
            setAuth(true);
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
        setNameIsEmpty(false);
    }

    return auth
        ? <h1>Welcome {name}!</h1>
        : (
            <div>
                <img id="logo" src={require("./mimica_logo.png")} />
                <div className="login">
                    <div className="input-fields">
                        <input id="name" type="text" placeholder="Your name" value={name} onChange={handleNameChange} />
                        <select id="language">
                            <option value="english">English</option>
                            <option value="spanish">Spanish</option>
                        </select>
                    </div>
                    <button id="playButton" onClick={handleLogin}>Play</button>
                    {nameIsEmpty ? <p className='error' role='alert'>You need to enter a name!</p> : null}
                </div>
            </div>
        );
}

export default Login;