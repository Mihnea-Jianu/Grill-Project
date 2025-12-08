import Form from './Form';
import './PostGrill.css';

function PostGrill({ currentPage, setCurrentPage, setLoginState}) {
    const style = (currentPage) => {
        if(currentPage !== "/post-grill") return { display: "none" };
        else return {};
    };

    return (
        <div className = "PostGrill" style = { style(currentPage) }>
            <img src = "background.png" alt = "bg" className = "BackgroundImage"/>
            <Form currentPage = { currentPage } setCurrentPage = { setCurrentPage } setLoginState = { setLoginState }/>
        </div>
    );
}

export default PostGrill;