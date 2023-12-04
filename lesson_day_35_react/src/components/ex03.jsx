import React, {useEffect, useState } from "react";

function Ex03 () {
    const [posts, setPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const jsonData = await response.json();
            setPosts(jsonData);
        };

        fetchUsers();
    }, []);

    const filteredPosts = posts.filter(post => post.title.includes(searchTerm) || post.body.includes(searchTerm));

    return (
       <div>
            <input type="text" onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search posts..." />
            <div>
                {filteredPosts.map(post => <p key={post.id}>{post.title}</p>)}
            </div>
       </div>

    );
}

export default Ex03;