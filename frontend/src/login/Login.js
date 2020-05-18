import React, { useState } from 'react';

function Login() {
    const [name, setName] = useState('');
    const [auth, setAuth] = useState(false);

    const handleLogin = () => {
        if (!name.trim()) {
            alert('You need to enter a name!');
        }
        else {
            setAuth(true);
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    return auth
        ? <h1>Welcome {name}!</h1>
        : (
            <div>
                <h1>Login</h1>
                <label htmlFor="name">Enter name: </label>
                <input id="name" name="name" type="text" placeholder="Your name" value={name} onChange={handleNameChange} />
                <button id="playButton" onClick={handleLogin}>Play!</button>
            </div>
        );
}

export default Login;