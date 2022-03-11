import { useSate, useContext, useEffect } from 'react'

import { Navigate, useParams } from 'react-router-dom';
import UsersContext from '../context/Users/UsersContext';

export default function Auth({ component: Component }) {

    const ctxUser = useContext(UsersContext)

    const { authStatus, verifyToken } = ctxUser;

    // const {id} = useParams()
    // console.log(id)

    useEffect(() => {
        verifyToken()
    }, [authStatus])

    console.log(authStatus);

    return (
        <div>
            {
                authStatus ?
                // Si el usuario ya está loggeado, mándalo al home
                // Con el token determinamos si el usuario está loggeado
                (<Navigate replace to ='/' />)
                :
                // Si el usuario no está loggeado, mándalo al componente que trae la ruta
                (<Component />)
            }
        </div>
    )
}
