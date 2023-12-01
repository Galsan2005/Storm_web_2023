async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const datas = await response.json();
    document.getElementById('posts').innerHTML = datas.map((data, index) => `<p onclick= handleClick(${index})>${data.title} </p>`);
    

    
}

async function handleClick(e) {
    const responseTwo = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${e}`);
    const commentData = await responseTwo.json();

    console.log(commentData);

    const hElement = document.createElement('h2');
    hElement.innerHTML = "Comments";
    document.getElementById("comments").appendChild(hElement);
    document.getElementById('comments').innerHTML = commentData.map(data => `<p>${data.name} </p>`);
    
    // document.getElementById("posts").appendChild(hElement);
    
}

fetchData();