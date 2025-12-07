import { useState } from 'react';
import Register from './Register';
import Navbar from './Navbar';
import Footer from './Footer';
import Reset from './Reset';
import Login from './Login';
import Home from './Home';
import './App.css';

function App() {
    const [loginState, setLoginState] = useState(false);
    const [currentPage, setCurrentPage] = useState("/home");

    return (
        <div className = "App">
            <Navbar loginState = { loginState } currentPage = { currentPage } setCurrentPage = { setCurrentPage }/>
            <Home loginState = { loginState } currentPage = { currentPage }/>
            <Login currentPage = { currentPage } setCurrentPage = { setCurrentPage } setLoginState = { setLoginState }/>
            <Register currentPage = { currentPage } setCurrentPage = { setCurrentPage } setLoginState = { setLoginState }/>
            <Reset currentPage = { currentPage } setCurrentPage = { setCurrentPage } setLoginState = { setLoginState }/>
            <Footer /> 
        </div>
    );
}

export default App;
