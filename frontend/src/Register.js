import Form from './Form';
import './Register.css';

function Register({ currentPage, setCurrentPage, setLoginState }) {
    const style = (currentPage) => {
        if(currentPage !== "/register") return { display: "none" };
        else return {};
    };

    return (
        <div className = "Register" style = { style(currentPage) }>
            <img src = "background.png" alt = "bg" className = "BackgroundImage"/>
            <Form currentPage = { currentPage } setCurrentPage = { setCurrentPage } setLoginState = { setLoginState }/>
        </div>
    );
}

export default Register;