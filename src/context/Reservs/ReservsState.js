import { useContext, useReducer } from "react";
import { Navigate } from "react-router-dom";

import ReservsReducer from './ReservsReducer'
import ReservsContext from './ReservsContext'
import axiosClient from "../../config/axios";
import UsersContext from "../Users/UsersContext";

const ReservsState = (props) => {

    const initialState = {
        reservs: []
    }

    const [globalState, dispatch] = useReducer(ReservsReducer, initialState);

    const createReserv = async (form) => {

        const res = await axiosClient.post('/api/reservs/create', form);
        console.log(res.data.data);

    }

    const getReservations = async (userId) => {

        const id = userId

        const res = await axiosClient.get(`/api/users/${id}`)

        const arrReservs = res.data.data.reservations;
        // console.log(arrReservs);

        dispatch({
            type: 'GET_RESERVS',
            payload: arrReservs
        });

    }

    return (
        <ReservsContext.Provider
            value={{
                currentUser: globalState.currentUser,
                reservs: globalState.reservs,
                createReserv,
                getReservations
            }}
        >
            { props.children }
        </ReservsContext.Provider>
    )

}

export default ReservsState;
