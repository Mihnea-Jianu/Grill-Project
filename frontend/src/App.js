import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';

function App() {
    const [loginState, setLoginState] = useState(false);
    const [currentPage, setCurrentPage] = useState("/register");

    return (
        <div className = "App">
            <Navbar loginState = { loginState } currentPage = { currentPage }/>
            <div> { currentPage } </div>
            <Footer />
        </div>
    );
}

export default App;
