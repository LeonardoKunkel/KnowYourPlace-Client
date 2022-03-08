import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

export default function Navbar(props) {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
      <>
          <div>
              <ul>
                  <li>
                      <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                      <NavLink to='/about'>About</NavLink>
                  </li>
                  <li>
                      <NavLink to='/users'>Users</NavLink>
                  </li>
              </ul>
          </div>




        <header className="bg-indigo-600">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
              <div className="flex items-center">
                <img className="h-10 w-auto" src="https://tailwindui.com/img/logos/workflow-mark.svg?color=white" alt=""></img>
                <div className="hidden ml-10 space-x-8 lg:block">

                  <NavLink to='/' className="text-base font-medium text-white hover:text-indigo-50">Home</NavLink>

                  <NavLink to='/about' className="text-base font-medium text-white hover:text-indigo-50">About</NavLink>

                  <NavLink to='/users' className="text-base font-medium text-white hover:text-indigo-50">Usuarios</NavLink>

                  <NavLink to='/profile' className="text-base font-medium text-white hover:text-indigo-50">Perfil</NavLink>

                  <a href="#" className="text-base font-medium text-white hover:text-indigo-50"> Company </a>

                </div>
              </div>
              <div className="ml-10 space-x-4">
                <a href="#" className="inline-block bg-orange-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75">Sign in</a>
              </div>
            </div>
            <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">

              <NavLink to='/' className="text-base font-medium text-white hover:text-indigo-50">Home</NavLink>

              <NavLink to='/about' className="text-base font-medium text-white hover:text-indigo-50">About</NavLink>

              <NavLink to='/users' className="text-base font-medium text-white hover:text-indigo-50">Usuarios</NavLink>

              <NavLink to='/profile' className="text-base font-medium text-white hover:text-indigo-50">Perfil</NavLink>

            </div>
          </nav>
        </header>


      </>
    )
}
