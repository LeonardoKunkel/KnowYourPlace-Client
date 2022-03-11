import { useContext, useEffect } from "react";
import UsersContext from "../context/Users/UsersContext";
import { Link, useNavigate } from 'react-router-dom';

export default function Users() {

    const ctxUsers = useContext(UsersContext)

    const {
        usrs,
        getUsers,
        verifyToken
    } = ctxUsers

    useEffect(() => { getUsers() }, [])

    let navigate = useNavigate()

    const userForm = () => {
        navigate('../users/edit', { replace: true })
    }

    return (
        <>
            <div className="bg-black absolute w-full h-full min-h-full">
                <div>
                    <button
                        className="mt-5 ml-10 inline-block bg-orange-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
                    >
                        <Link to='/register'>
                            Agregar Usuario
                        </Link>
                    </button>
                </div>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 ml-8 mr-8 mb-8">
                    {
                        usrs?.map((usr) => {
                            return (
                                <li key={usr._id} className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200">
                                    <div className="flex-1 flex flex-col p-8">
                                    <img className="w-32 h-32 flex-shrink-0 mx-auto rounded-full" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt=""></img>
                                    <h3 className="mt-6 text-gray-900 text-sm font-medium">{usr.name} {usr.lastname}</h3>
                                    <dl className="mt-1 flex-grow flex flex-col justify-between">
                                        <dt className="sr-only">Title</dt>
                                        <dd className="text-gray-500 text-sm">{usr.position}</dd>
                                        <dt className="sr-only">Role</dt>
                                        <dd className="mt-3">
                                            {
                                                usr.profile ?
                                                (
                                                    <>
                                                        <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">Admin</span>
                                                    </>
                                                )
                                                :
                                                (
                                                    <>
                                                        <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">User</span>
                                                    </>
                                                )
                                            }
                                        </dd>
                                    </dl>
                                    </div>
                                    <div>
                                    <div className="-mt-px flex divide-x divide-gray-200">
                                        <div className="w-0 flex-1 flex">
                                        <a href="" className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500">

                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            </svg>
                                            <span className="ml-3">Editar</span>
                                        </a>
                                        </div>
                                        <div className="-ml-px w-0 flex-1 flex">
                                        <a href="" className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500">

                                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
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
