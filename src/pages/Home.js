import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ReservsContext from "../context/Reservs/ReservsContext";
import UsersContext from '../context/Users/UsersContext';


export default function Home() {

    const ctxUser = useContext(UsersContext);

    const { currentUser } = ctxUser

    const ctxReserv = useContext(ReservsContext);

    const { reservs, getReservations } = ctxReserv

    useEffect(() => { getReservations(currentUser._id) }, []);

    return (
        <>
            <div className="bg-black absolute w-full h-full min-h-full">
                <div>
                    <button
                        className="mt-5 ml-10 inline-block bg-orange-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                    >
                        <Link to='/addreserv'>
                            Agregar Reservación
                        </Link>
                    </button>
                </div>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 ml-8 mr-8 mb-8">
                    {
                        reservs?.map((resvr) => {
                            return (
                                <li key={resvr._id} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                                    <div className="flex-1 flex flex-col p-8">
                                    <h3 className="mt-6 text-gray-900 text-sm font-medium">Piso: {resvr.floor}</h3>
                                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                                        <dt className="sr-only">Title</dt>
                                        <dd className="text-gray-500 text-sm">Hora: {resvr.time}</dd>
                                        <dt className="sr-only">Role</dt>
                                        <dd className="mt-3">
                                        </dd>
                                    </dl>
                                    </div>
                                    <div>
                                    <div className="-mt-px flex divide-x divide-gray-200">
                                        <div className="w-0 flex-1 flex">
                                        <a href="" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">
                                            <span className="ml-3">Editar</span>
                                        </a>
                                        </div>
                                        <div className="-ml-px w-0 flex-1 flex">
                                        <a href="" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
                                            <span className="ml-3">Eliminar</span>
                                        </a>
                                        </div>
                                    </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        </>
    )
}
