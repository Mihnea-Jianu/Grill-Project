import { useState } from 'react';
import './Navbar.css';

function Navbar() {
    const noneIf = (a) => {
        if(a) return "none";
        else return "";
    };

    const [loggedIn, setLoggedIn] = useState(true);
    const [buttons, setButtons] = useState([
        {className: "HomePage",   address: "/", text: "Pimp Your Grill", display: "none",            id: 0},
        {className: "Profile",    address: "/", text: "Profil",          display: noneIf(!loggedIn), id: 1},
        {className: "BestGrills", address: "/", text: "Best Grills",     display: "",                id: 2},
        {className: "Login",      address: "/", text: "Login",           display: noneIf(loggedIn),  id: 3},
        {className: "Register",   address: "/", text: "Register",        display: noneIf(loggedIn),  id: 4},
        {className: "Logout",     address: "/", text: "Logout",          display: noneIf(!loggedIn), id: 5},
    ]);

    return (
        <nav className = "Navbar">
            <a href = { buttons[0].address } className = { buttons[0].className }>
                <div className = "HomePageText"> { buttons[0].text } </div>
                <img src = "logo.png" alt = "logo" className="HomePageLogo"/>
            </a>

            {buttons.map((button) => (
                <a href = { button.address } className = { button.className } style = {{ display: button.display }}> 
                    { button.text } 
                </a>
            ))}     
        </nav>
    );
}

export default Navbar;
