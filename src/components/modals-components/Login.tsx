import React, { useState } from 'react';
import "./Login.scss"

interface Props{
  setOpenModal: (value: boolean) => void;
  setDisabled: (value: boolean) => void;
}

export const Login: React.FC<Props> = ({setOpenModal, setDisabled}) => {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState(null);

    


const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(username, pass)
        setOpenModal(false);
        setDisabled(false);
    }


    return (
        <div className="login-background">
          <div className="login-contain">
            <div className="login-closeButton">
              <button
                onClick={() => {
                setOpenModal(false);
                }}>
                x
              </button>
            </div>
            <div className="login-title">
              <p>Sign in</p>
            </div>
            <form onSubmit={handleSubmit}>
              <input type='text'
                value={username}
                name='Username'
                placeholder='Username'
                onChange={(event) => setUsername(event.target.value)}
              />
              <input type='password'
                value={pass}
                name='Pass'
                placeholder='Pass'
                onChange={(event) => setPass(event.target.value)}
              />
              {username && pass != '' &&
                <button type='submit'>Login</button>
              }
            </form>
          </div>
        </div>
    )
}

export default Login
