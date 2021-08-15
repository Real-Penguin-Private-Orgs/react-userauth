import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';

async function LoginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}

export default function Login({ title, setToken }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        document.title = title || "React App";
    }, [title]);

    const handleSubmit = async(event) => {
        event.preventDefault();
        const token = await LoginUser({
            username, 
            password
        })
        setToken(token)
    }

    return(
    <div className="login-wrapper">
        <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
            <label>
                <p>Username</p>
                <input type="text" onChange={e => setUsername(e.target.value)} />
            </label>
            <label>
                <p>Password</p>
                <input type="password" onChange={e => setPassword(e.target.value)} />
            </label>
            <div style={{ marginTop: '1em' }}>
                <button type="submit">Submit</button>
            </div>
            </form>
    </div>
    )
}

Login.prototype = {
    setToken: PropTypes.func.isRequired
}