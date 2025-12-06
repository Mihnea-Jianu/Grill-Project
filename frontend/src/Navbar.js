import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const links = ["/", "/", "/", "/"];

    const [loggedIn, setLoggedIn] = useState(true);

    setLoggedIn(false);

    const noneIf = (a) => {
        if(a) return "none";
    };

    return (
        <nav className = "Navbar">
            <a href = {links[0]} className = "HomePage">
                <div className = "HomePageText"> Pimp Your Grill </div>
                <img src = "logo.png" alt = "logo" className="HomePageLogo"/>
            </a>

            <a href = {links[1]} className = "BestGrills"> Best Grills </a>

            <a href = {links[2]} className = "Login" style = {{
                display: noneIf(loggedIn)
            }}> Login </a>

            <a href = {links[3]} className = "Register" style = {{
                display: noneIf(loggedIn)
            }}> Register </a>
        </nav>
    );
}

export default Navbar;