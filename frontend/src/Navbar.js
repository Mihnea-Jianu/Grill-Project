import './Navbar.css';

function Navbar() {
    const links = ["/", "/", "/", "/"];

    return (
        <nav className = "Navbar">
            <a href = {links[0]} className = "HomePage">
                <div className = "HomePageText"> Pimp Your Grill </div>
                <img src = "logo.png" alt = "logo" className="HomePageLogo"/>
            </a>
            <a href = {links[1]} className = "BestGrills"> Best Grills </a>
            <a href = {links[2]} className = "Login"     > Login       </a>
            <a href = {links[3]} className = "Register"  > Register    </a>
        </nav>
    );
}

export default Navbar;