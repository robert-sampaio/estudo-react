import { PostCard } from "../PostCard";

export const Post = ({ posts }) => {
    return (<div className="posts">
        {posts.map(post => (
            <PostCard
                key={post.id}
                title={post.title}
                cover={post.cover}
                coverTitle={post.coverTitle}
                body={post.body}
            />
        ))}
    </div>
    )
}