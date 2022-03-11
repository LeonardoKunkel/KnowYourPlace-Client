
const reducer = (globalState, action) => {

    switch (action.type) {
        case 'GET_RESERVS':
            return {
                ...globalState,
                reservs: action.payload
            }

        default:
            return globalState
    }

}

export default reducer
