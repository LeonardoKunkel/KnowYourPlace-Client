import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import EditUser from './components/Auth/EditUser';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import UsersState from './context/Users/UsersState';
import Auth from './routes/Auth';
import Private from './routes/Private';
import Layout from './components/Layout/Layout'
import Profile from './pages/Profile';
import Reservs from './pages/Reservs';
import AddReserv from './pages/AddReserv';
import ReservsState from './context/Reservs/ReservsState';


function App() {
  return (
    <>
      <ReservsState>
        <UsersState>
          <BrowserRouter>

            <Routes>

              <Route
                path='login'
                element={
                  <Auth component={Login} />
                }
              />



              <Route path='/' element={<Layout />}>
                <Route
                  index
                  element={
                    <Home />
                  }
                />

                {/*<Route
                  path='register'
                  element={
                    <Private component={Register} />
                  }
                />*/}

                <Route path='/register' element={<Register />} />

                <Route
                  path='users'
                  element={
                    <Private component={Users}/>
                  }
                />

                <Route
                  path='about'
                  element={
                    <Private component={About} />
                  }
                />

                <Route
                  path='reservs'
                  element={
                    <Private component={Reservs} />
                  }
                />

                <Route
                  path='/profile'
                  element={
                    <Private component={Profile} />
                  }
                />

                <Route
                  path='/users/edit/:id'
                  element={
                    <Private component={EditUser}/>
                  }
                />

                <Route
                  path='/addreserv'
                  element={
                    <Private component={AddReserv} />
                  }
                />

                <Route path='*' element={<NotFound />} />

              </Route>

            </Routes>

          </BrowserRouter>

        </UsersState>
      </ReservsState>

    </>
  );
}

export default App;
