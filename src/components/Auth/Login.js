import { useState, useContext } from 'react';

import UsersContext from '../../context/Users/UsersContext';


export default function Login() {

    const ctxUser = useContext(UsersContext);

    const {
        loginUser
    } = ctxUser

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {

        setData({
            ...data,
            [event.target.name]: event.target.value
        })

    }

    const handleSubmit = (event) => {

        event.preventDefault()

        loginUser(data)

    }

    return (
        <>
                <main>
                    <section className="absolute w-full h-full">
                    <div
                        className="absolute top-0 w-full h-full bg-gray-900"
                        style={{
                            backgroundImage:
                                "url(" + require("../../assets/img/register_bg_2.png").default + ")",
                            backgroundSize: "100%",
                            backgroundRepeat: "no-repeat"
                        }}
                    >
                    </div>
                    
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex content-center items-center justify-center h-full">
                            <div className="w-full lg:w-4/12 px-4">
                                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0">
                                    <div>
                                        <img className="mx-auto mt-5 h-11 w-auto flex items-center justify-center" src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png" alt="" />
                                    </div>
                                    <div className="rounded-t mb-0 px-6 py-6">
                                    </div>
                                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                        <form onSubmit={(evt) => { handleSubmit(evt) }}>

                                            <div className="relative w-full mb-3">

                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Correo
                                                </label>

                                                <input
                                                    name="email"
                                                    value={data.email}
                                                    type="email"
                                                    onChange={(evt) => { handleChange(evt) }}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="juanperez@ejemplo.com"
                                                    style={{ transition: "all .15s ease" }}
                                                />

                                            </div>

                                            <div className="relative w-full mb-3">

                                                <label
                                                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                                    htmlFor="grid-password"
                                                >
                                                    Contrase??a
                                                </label>

                                                <input
                                                    name="password"
                                                    type="password"
                                                    value={data.password}
                                                    onChange={(evt) => { handleChange(evt) }}
                                                    className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Holamundo123"
                                                    style={{ transition: "all .15s ease" }}
                                                />

                                            </div>

                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-orange-500 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                                    type="submit"
                                                    style={{ transition: "all .15s ease" }}
                                                >
                                                    Iniciar Sesi??n
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

