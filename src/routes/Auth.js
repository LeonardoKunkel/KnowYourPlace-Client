import { useSate, useContext, useEffect } from 'react'

import { Navigate } from 'react-router-dom';
import UsersContext from '../context/Users/UsersContext';


export default function Auth({ component: Component }) {

    const ctxUser = useContext(UsersContext)

    const { authStatus, verifyToken } = ctxUser;

    useEffect(() => {
        verifyToken()
    }, [authStatus])

    return (
        <div>
            {
                authStatus ?
                // Si el usuario ya está loggeado, mándalo al home
                // Con el token determinamos si el usuario está loggeado
                (<Navigate replace to ='/' />)
                :
                // Si el usuario no está loggeado, mándalo al componente que trae la ruta
                // O sea, Login
                (<Component />)
            }
        </div>
    )
}
