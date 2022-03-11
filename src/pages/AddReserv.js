import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ReservsContext from "../context/Reservs/ReservsContext";
import UsersContext from "../context/Users/UsersContext";

export default function AddReserv(props) {

    const ctxUser = useContext(UsersContext);

    const { currentUser } = ctxUser;

    const ctxReservs = useContext(ReservsContext);

    const { createReserv } = ctxReservs;

    // const id = props.params

    const navigate = useNavigate()

    const [data, setData] = useState({
        floor: 0,
        time: '',
        user: currentUser._id
    });

    const handleChange = (event) => {
        setData({
            ...data,
            user: currentUser._id,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        createReserv(data);

        navigate('/', {replace: true});
    };

    return (
        <>
            <div className="bg-black absolute w-full h-full min-h-full">
                <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div class="sm:mx-auto sm:w-full sm:max-w-md">
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Agrega una reservación</h2>
                    </div>

                    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                            <form class="space-y-6" onSubmit={(evt) => { handleSubmit(evt) }}>
                                <div>
                                <label for="email" class="block text-sm font-medium text-gray-700"> Piso </label>
                                <div class="mt-1">
                                    <input
                                        name="floor"
                                        value={data.floor}
                                        required
                                        type="number"
                                        onChange={(evt) => { handleChange(evt) }}
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />

                                </div>
                                </div>

                                <div>
                                <label for="password" class="block text-sm font-medium text-gray-700"> Hora </label>
                                <div class="mt-1">
                                    <input
                                        name="time"
                                        value={data.time}
                                        required
                                        type="text"
                                        onChange={(evt) => { handleChange(evt) }}
                                        class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                                </div>

                                <div>
                                <button
                                    type="submit"
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Crear
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
