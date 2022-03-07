import { useState, useContext } from 'react';

import UsersContext from '../../context/Users/UsersContext'

export default function Login() {

    const ctxUser = useContext(UsersContext);

    const {
        loginUser
    } = ctxUser

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {

        setData({
            ...data,
            [event.target.name]: event.target.value
        })

    }

    const handleSubmit = (event) => {

        event.preventDefault()

        loginUser(data)

    }

    return (
        <>
            <form onSubmit={(evt) => { handleSubmit(evt) }}>

                <label>Correo:</label>
                <input
                    name='email'
                    value={data.email}
                    type="email"
                    onChange={(evt) => { handleChange(evt) }}
                />

                <label>Contraseña:</label>
                <input
                    name='password'
                    value={data.password}
                    type="password"
                    onChange={(evt) => { handleChange(evt) }}
                />

                <button type="submit">Iniciar sesión</button>

            </form>
        </>
    )
}

