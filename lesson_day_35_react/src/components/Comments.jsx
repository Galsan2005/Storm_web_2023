import React, {useEffect, useState} from "react";

function Comments({postId}) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            const jsonData = await response.json();
            console.log(jsonData)
            setComments(jsonData);
        };

        fetchComments();
    }, []);

    return (
        <div>
            <h1>Posts with Comments</h1>
            {comments.map(comment => (
                <p key={comment.id} onClick={() => setSelectedPostId(comment.id)}>
                    {comment.name}
                </p>
            ))}
        </div>
    );
}

export default Comments;