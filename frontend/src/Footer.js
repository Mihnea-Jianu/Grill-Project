import './Footer.css';

function Footer() {
    const links = ["https://instagram.com", "https://facebook.com", "https://youtube.com", "https://twitch.com"];

    return (
        <div className = "Footer">
            <div className = "FooterText"> Contact </div>
            <a href = {links[0]}> <img src = "instagram.png" alt = "ig"/> </a>
            <a href = {links[1]}> <img src = "facebook.png" alt = "fb"/> </a>
            <a href = {links[2]}> <img src = "youtube.png" alt = "yt"/> </a>
            <a href = {links[3]}> <img src = "twitch.png" alt = "tw"/> </a>
        </div>
    );
}

export default Footer;