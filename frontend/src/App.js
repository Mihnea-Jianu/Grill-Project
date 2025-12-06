import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

function App() {
    const [loginState, setLoginState] = useState(false);
    const [currentPage, setCurrentPage] = useState("/home");

    console.log(setLoginState);

    return (
        <div className = "App">
            <Navbar loginState = { loginState } currentPage = { currentPage } setCurrentPage = { setCurrentPage }/>
            <img src = "background.png" alt = "bg" className = "BackgroundImage" />
            <Footer />
        </div>
    );
}

export default App;
