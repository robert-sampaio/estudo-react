export const PostCard = ({cover, coverTitle, title, body}) => {
    return (<div className="post">
        <img src={cover} alt={coverTitle}></img>
        <div
            className="post-content">
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    </div>
    );
}

