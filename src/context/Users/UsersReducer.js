
const reducer = (globalState, action) => {

    switch (action.type) {
        case 'REGISTRO_EXITOSO':
        case 'LOGIN_EXITOSO':

            localStorage.setItem('token', action.payload)

            return {
                ...globalState,
                authStatus: true
            }

        case 'CERRAR_SESION':

            localStorage.removeItem('token')

            return {
                ...globalState,
                authStatus: false,
                currentUser: {
                    name: '',
                    lastname: '',
                    email: '',
                    field: '',
                    position: ''
                }
            }
        default:
            return globalState
    }

}

export default reducer
