import { useState } from 'react';
import './Navbar.css';

function Navbar({ loginState, setLoginState, currentPage, setCurrentPage }) {
    const handleClick = (button) => {
        if(button.id === 5) {
            setLoginState(false); setCurrentPage("/home");
        } else {
            setCurrentPage(button.address);
        }
    };

    const none = (state) => {
        if(state) return "none";
        else      return "";
    };

    const solid = (state) => {
        if(state) return "solid";
        else      return "";
    };

    const width = (state) => {
        if(state) return "2px";
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
            borderWidth: width(button.address === currentPage),
            borderRadius: "4px"
        };

        if(button.id === 1 || button.id === 5) {
            style.display = none(!loginState);
        } else if(button.id !== 2) {
            style.display = none(loginState);
        }

        if(button.id === 3 && currentPage === "/reset-password") {
            style.padding = padding(true);
            style.border = solid(true);
            style.borderWidth = width(true);
        }

        return style;
    };

    const [buttons, setButtons] = useState([
        {className: "HomeButton",       address: "/home",        text: "Pimp Your Grill", style: {}, id: 0},
        {className: "ProfileButton",    address: "/profile",     text: "Profil",          style: {}, id: 1},
        {className: "BestGrillsButton", address: "/best-grills", text: "Best Grills",     style: {}, id: 2},
        {className: "LoginButton",      address: "/login",       text: "Login",           style: {}, id: 3},
        {className: "RegisterButton",   address: "/register",    text: "Register",        style: {}, id: 4},
        {className: "LogoutButton",     address: "",             text: "Logout",          style: {}, id: 5},
    ]);

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style = style(buttons[i]);
    }

    console.log(setButtons);

    return (
        <nav className = "Navbar">
            <div onClick = { () => setCurrentPage(buttons[0].address) } className = { buttons[0].className }>
                <div className = "HomeButtonText"> { buttons[0].text } </div>
                <img src = "logo.png" alt = "logo" className = "HomeButtonLogo"/>
            </div>

            {buttons.map((button) => (
                <div onClick = { () => handleClick(button) } className = { button.className } style = { button.style }> 
                    { button.text } 
                </div>
            ))}     
        </nav>
    );
}

export default Navbar;
