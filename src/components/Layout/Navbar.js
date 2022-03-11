import React from 'react'
import { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import UsersContext from '../../context/Users/UsersContext';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const ctxUser = useContext(UsersContext)

  const {
    currentUser,
    verifyToken,
    logoutUser
  } = ctxUser


  useEffect(() => { verifyToken() }, [])

    return (
      <>
        <header className="bg-zinc-600">
          
          <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
              <div className="flex items-center">
                <img className="h-10 w-auto" src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png" alt=""></img>
                <div className="hidden ml-10 space-x-8 lg:block">

                  <NavLink to='/' className="text-base font-medium text-white hover:text-indigo-50">Home</NavLink>

                  <NavLink to='/users' className="text-base font-medium text-white hover:text-indigo-50">Usuarios</NavLink>

                  {/*<NavLink to='/reservs' className="text-base font-medium text-white hover:text-indigo-50">Reservaciones</NavLink>*/}

                  <NavLink to='/profile' className="text-base font-medium text-white hover:text-indigo-50">Perfil</NavLink>

                  <NavLink to='/about' className="text-base font-medium text-white hover:text-indigo-50">Acerca de nosotros</NavLink>

                </div>
              </div>
              <div className="px-2 flex items-center sm:px-6">
                <div className="flex-shrink-0">
                  <img className="h-10 w-10 rounded-full" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt=""></img>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">{currentUser.name} {currentUser.lastname}</div>
                </div>
              </div>
              <div className=" space-x-4">
                <button className="inline-block bg-orange-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">
                  <Link to='/login' onClick={() => { logoutUser() }}>
                    Cerrar sesión
                  </Link>
                </button>
              </div>
            </div>
            <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">

              <NavLink to='/' className="text-base font-medium text-white hover:text-indigo-50">Home</NavLink>

              <NavLink to='/users' className="text-base font-medium text-white hover:text-indigo-50">Usuarios</NavLink>

              {/*<NavLink to='/reservs' className="text-base font-medium text-white hover:text-indigo-50">Reservaciones</NavLink>*/}

              <NavLink to='/profile' className="text-base font-medium text-white hover:text-indigo-50">Perfil</NavLink>

              <NavLink to='/about' className="text-base font-medium text-white hover:text-indigo-50">Acerca de nosotros</NavLink>

            </div>
          </nav>
        </header>


      </>
    )
}
