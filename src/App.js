import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Login from './components/Auth/Login';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import Navbar from './components/Layout/Navbar';
import Register from './components/Auth/Register';
import UsersState from './context/Users/UsersState';


function App() {
  return (
    <>
      <UsersState>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/users' element={<Users />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Routes>

        </BrowserRouter>

      </UsersState>
    </>
  );
}

export default App;
