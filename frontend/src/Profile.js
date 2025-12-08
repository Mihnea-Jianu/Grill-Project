import './Profile.css';

function Profile({ currentPage, setCurrentPage }) {
    const style = (currentPage) => {
        if(currentPage !== "/profile") return { display: "none" };
        else return {};
    };

    let username = "placeholder";
    let email = "placeholder";
    let phoneNumber = "placeholder";

    return (
        <div className = "Profile" style = { style(currentPage) }>
            <img src = "background.png" alt = "bg" className = "BackgroundImage"/>
            <div className = "Info">
                <div className = "Field"> Name: { username } </div>
                <div className = "Field"> E-mail: { email } </div>
                <div className = "Field"> Telephone: { phoneNumber } </div>
            </div>
            <div className = "PostGrillButton" onClick = { () => setCurrentPage("/post-grill") }>
                Post a grill
            </div>
        </div>
    );
}

export default Profile;