import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import UsersState from './context/Users/UsersState';
import Auth from './routes/Auth';
import Private from './routes/Private';
import Layout from './components/Layout/Layout'
import Profile from './pages/Profile';
import Reservs from './pages/Reservs';

function App() {
  return (
    <>
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

              <Route
                path='register'
                element={
                  <Auth component={Register} />
                }
              />

              <Route path='/users' element={<Users />} />
              <Route path='/about' element={<About />} />
              <Route path='/reservs' element={<Reservs />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='*' element={<NotFound />} />

            </Route>

            

          </Routes>

        </BrowserRouter>

      </UsersState>
    </>
  );
}

export default App;
