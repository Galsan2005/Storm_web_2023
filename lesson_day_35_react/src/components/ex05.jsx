import React, {useEffect, useState} from "react";
import Comments from "./Comments";

function Ex05() {
    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState()

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const jsonData = await response.json();
            setPosts(jsonData);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts with Comments</h1>
            {posts.map(post => (
                <p key={post.id} onClick={() => setSelectedPostId(post.id)}>
                    {post.title}
                </p>
            ))}
            {selectedPostId && <Comments postId={selectedPostId} />}
        </div>
    );
}

export default Ex05;