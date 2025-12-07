import Form from './Form';
import './Reset.css';

function Reset({ currentPage, setCurrentPage, setLoginState}) {
    const style = (currentPage) => {
        if(currentPage !== "/reset-password") return { display: "none" };
        else return {};
    };

    return (
        <div className = "Reset" style = { style(currentPage) }>
            <img src = "background.png" alt = "bg" className = "BackgroundImage"/>
            <Form currentPage = { currentPage } setCurrentPage = { setCurrentPage } setLoginState = { setLoginState }/>
        </div>
    );
}

export default Reset;