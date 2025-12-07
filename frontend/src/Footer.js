import './Footer.css';

function Footer() {
    const links = [
        "https://www.instagram.com/lsacbucuresti/", 
        "https://www.facebook.com/LsacBucuresti",
        "https://www.youtube.com/@LSACBucuresti", 
        "https://www.twitch.tv/lsac_bucuresti"
    ];

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