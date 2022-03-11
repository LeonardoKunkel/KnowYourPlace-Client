import { useContext, useEffect } from "react";
import UsersContext from "../context/Users/UsersContext";
import { useNavigate } from 'react-router-dom';

export default function Profile() {

    const ctxUser = useContext(UsersContext)

    const { currentUser } = ctxUser

    const navigate = useNavigate()

    const id = currentUser._id;

    console.log(currentUser);

    const goEditUser = () => {

        navigate(`../users/edit/${id}`)

    }

    return (
        <>
            <main className="profile-page">
                <section className="relative block" style={{ height: "350px" }}>
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                            "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-orange-500 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>

                <section className="relative py-16 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    {currentUser.reservations.length}
                                                </span>
                                                <span className="text-sm text-gray-500">Rservaciones</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-2">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                        {currentUser.name} {currentUser.lastname}
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{" "}
                                        Ciudad de México
                                    </div>
                                    <div className="mb-2 text-gray-700 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                                        {currentUser.position} - {currentUser.field}
                                    </div>
                                    <div className="mb-2 text-gray-700">
                                        <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                                        "Sigue aprendiendo"
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={() => {goEditUser()}}
                                className="inline-block bg-orange-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                                Editar usuario
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
