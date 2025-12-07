import { useState } from 'react';
import './Home.css';

function Home({ loginState, currentPage }) {
    const style = (currentPage) => {
        if(currentPage !== "/home") return { display: "none" };
        else return {};
    };

    const text = (loginState) => {
        if(!loginState) return "Înregistrează-te pentru a intra și tu în cea mai mare rețea de grătaragii din lume!";
        else return "Ai intrat în cont!";
    };

    return (
        <div className = "Home" style = { style(currentPage) }>
            <img src = "background.png" alt = "bg" className = "BackgroundImage"/>
            <div className = "Name">
                <div className = "PimpYourText"> Pimp Your </div>
                <div className = "GrillText"> Grill </div>
            </div>
            <div className = "HomeText">
                { text(loginState) }
            </div>
            <img src = "peter.png" alt = "pt" className = "PeterImage"/>
        </div>
    );
}

export default Home;
