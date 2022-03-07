import { useReducer } from "react"

import UsersReducer from "./UsersReducer";
import UsersContext from "./UsersContext";
import axiosClient from "../../config/axios";

const UsersState = (props) => {

    const initialState = {
        currentUser: {
            name: '',
            lastname: '',
            email: ''
        },
        authStatus: false
    }

    const [globalState, dispatch] = useReducer(UsersReducer, initialState)

    const registerUser = async (form) => {

        const res = await axiosClient.post('/api/users/create', form);

        console.log(res);
        const token = res.data.data;

        dispatch({
            type: 'REGISTRO_EXITOSO',
            payload: token
        })

    }

    const verifyToken = async () => {

        const token = localStorage.getItem('token')

        if (!token) {
            return delete axiosClient.defaults.headers.common['x-token']
        }

        axiosClient.defaults.headers.common['x-token'] = token

        const res = await axiosClient.get('/api/users/verifytoken')

        const userData = res.data.data;

        dispatch({
            type: 'VERIFICAR_TOKEN',
            payload: userData
        })

    }

    const loginUser = async (form) => {

        const res = await axiosClient.post('/api/users/login', form);

        console.log(res);

    }

    const logoutUser = async () => {

        dispatch({
            type: 'CERRAR_SESION'
        })

    }

    return (
        <UsersContext.Provider
            value={{
                authStatus: globalState.authStatus,
                currentUser: globalState.currentUser,
                registerUser,
                verifyToken,
                loginUser,
                logoutUser
            }}
        >
            { props.children }
        </UsersContext.Provider>
    )

}

export default UsersState
