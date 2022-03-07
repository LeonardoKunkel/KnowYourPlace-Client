import { useContext, useState } from 'react'
import UsersContext from '../../context/Users/UsersContext'

export default function Register() {

    const ctxUser = useContext(UsersContext);

    const {
        registerUser
    } = ctxUser

    const [data, setData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        field: '',
        position: ''
    })

    console.log(registerUser);

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        registerUser(data)
    }

    return (
        <>
            <form onSubmit={(evt) => { handleSubmit(evt) }}>

                <label>Nombre: </label>
                <input
                    name="name"
                    type="text"
                    value={data.name}
                    onChange={(evt) => { handleChange(evt) }}
                />

                <br />

                <label>Apellido: </label>
                <input
                    name="lastname"
                    type="text"
                    value={data.lastname}
                    onChange={(evt) => { handleChange(evt) }}
                />

                <br />

                <label>Área: </label>
                <input
                    name="field"
                    type="text"
                    value={data.field}
                    onChange={(evt) => { handleChange(evt) }}
                />

                <br />

                <label>Puesto: </label>
                <input
                    name="position"
                    type="text"
                    value={data.position}
                    onChange={(evt) => { handleChange(evt) }}
                />

                <br />

                <label>Correo: </label>
                <input
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={(evt) => { handleChange(evt) }}
                />

                <br />

                <label>Contraseña: </label>
                <input
                    name="password"
                    type="password"
                    value={data.password}
                    onChange={(evt) => { handleChange(evt) }}
                />

                <br />

                <button type="submit">Crear usuario</button>
            </form>
        </>
    )
}
