import { useState } from 'react';
import Form from './Form';
import './Login.css';

function Login({ currentPage, setCurrentPage, setLoginState}) {
    const style = (currentPage) => {
        if(currentPage !== "/login") return { display: "none" };
        else return {};
    };

    return (
        <div className = "Login" style = { style(currentPage) }>
            <img src = "background.png" alt = "bg" className = "BackgroundImage"/>
            <Form currentPage = { currentPage } setCurrentPage = { setCurrentPage } setLoginState = { setLoginState }/>
        </div>
    );
}

export default Login;