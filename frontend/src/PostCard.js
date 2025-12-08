import 'PostCard.css';

function PostCard({ post }) {
    return (
        <div className = "PostCard">
            <div className = "Owner"> Pimp: { post.owner } </div>
            <img src = { post.picture } alt = ""/>
            <div className = "Name"> { post.name } </div>
            <div className = "Likes">
                <img src = { post.likePicture } alt = ""/>
                <div> { post.likeCount } </div>
            </div>
            <div className = "Descripion"> { post.description } </div>
        </div>
    );
}