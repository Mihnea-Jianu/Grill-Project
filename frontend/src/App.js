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
            <div className = "Name">
                <div className = "PimpYour"> Pimp Your </div>
                <div className = "Grill"> Grill </div>
            </div>
            <div className = "HomeText">
                Înregistrează-te pentru a intra și tu în cea mai mare rețea de grătaragii din lume!
            </div>
            <img src = "peter.png" alt = "pt" className = "PeterImage" />
            <Footer />
        </div>
    );
}

export default App;
