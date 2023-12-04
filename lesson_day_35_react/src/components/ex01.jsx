import React, {useEffect, useState} from "react";

function Ex01() {
    const [Post, setPost] = useState([]);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const jsonData = await response.json();
            setPost(jsonData);
        };

        fetchPost();
    }, []);

    if(!Post[1]) return <div>Loading...</div>;

    return (
        <div>
            <h1>{Post[1].title}</h1>
            <p>{Post[1].body}</p>
        </div>
    );
}

export default Ex01;