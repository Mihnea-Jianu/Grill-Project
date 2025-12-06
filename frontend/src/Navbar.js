import { useState } from 'react';
import './Navbar.css';

function Navbar({ loginState, currentPage }) {
    const none = (state) => {
        if(state) return "none";
        else      return "";
    };

    const solid = (state) => {
        if(state) return "solid";
        else      return "";
    };

    const padding = (state) => {
        if(state) return "8px";
        else      return "10px";
    }

    const style = (button) => {
        if(button.id === 0) {
            return {
                display: "none"
            };
        }

        let style = {
            display: "",
            padding: padding(button.address === currentPage),
            border: solid(button.address === currentPage),
            borderWidth: "2px",
            borderRadius: "4px"
        };

        if(button.id === 1 || button.id === 5) {
            style.display = none(!loginState);
        } else {
            style.display = none(loginState);
        }

        return style;
    };

    const [buttons, setButtons] = useState([
        {className: "HomePage",   address: "/home",        text: "Pimp Your Grill", style: {}, id: 0},
        {className: "Profile",    address: "/profile",     text: "Profil",          style: {}, id: 1},
        {className: "BestGrills", address: "/best-grills", text: "Best Grills",     style: {}, id: 2},
        {className: "Login",      address: "/login",       text: "Login",           style: {}, id: 3},
        {className: "Register",   address: "/register",    text: "Register",        style: {}, id: 4},
        {className: "Logout",     address: "/logout",      text: "Logout",          style: {}, id: 5},
    ]);

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style = style(buttons[i]);
    }

    return (
        <nav className = "Navbar">
            <a href = { buttons[0].address } className = { buttons[0].className }>
                <div className = "HomePageText"> { buttons[0].text } </div>
                <img src = "logo.png" alt = "logo" className = "HomePageLogo"/>
            </a>

            {buttons.map((button) => (
                <a href = { button.address } className = { button.className } style = { button.style }> 
                    { button.text } 
                </a>
            ))}     
        </nav>
    );
}

export default Navbar;
