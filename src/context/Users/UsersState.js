import { useReducer } from "react"

import UsersReducer from "./UsersReducer";
import UsersContext from "./UsersContext";
import axiosClient from "../../config/axios";

const UsersState = (props) => {

    const initialState = {
        currentUser: {
            name: '',
            lastname: '',
            email: '',
            field: '',
            position: '',
            profile: false,
            reservations: []
        },
        authStatus: false,
        usrs: []
    }

    const [globalState, dispatch] = useReducer(UsersReducer, initialState)

    const loginUser = async (form) => {

        const res = await axiosClient.post('/api/users/login', form);
        console.log(res);
        const token = res.data.data

        dispatch({
            type: 'LOGIN_EXITOSO',
            payload: token
        })

    }

    const registerUser = async (form) => {

        const res = await axiosClient.post('/api/users/create', form);

        console.log(res);
        const token = res.data.data;

        dispatch({
            type: 'REGISTRO_EXITOSO',
            payload: token
        })

    }

    const getUsers = async () => {

        const res = await axiosClient.get('/api/users');
        console.log(res);
        const arrUsers = res.data.data;

        dispatch({
            type: 'GET_USERS',
            payload: arrUsers
        })

        // console.log(globalState);

    }

    const verifyToken = async () => {

        const token = localStorage.getItem('token')

        if (!token) {
            return delete axiosClient.defaults.headers.common['x-token']
        }

        axiosClient.defaults.headers.common['x-token'] = token

        const res = await axiosClient.get('/api/users/verifytoken')

        console.log(res);
        const userData = res.data.data;
        console.log(userData);

        dispatch({
            type: 'VERIFICAR_TOKEN',
            payload: userData
        })

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
                usrs: globalState.usrs,
                registerUser,
                verifyToken,
                getUsers,
                loginUser,
                logoutUser
            }}
        >
            { props.children }
        </UsersContext.Provider>
    )

}

export default UsersState
