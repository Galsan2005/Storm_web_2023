let page = 1;

async function fetchData(p){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${p}`)
    const posts = await response.json();

    console.log(posts);
    document.getElementById('posts').innerHTML = posts.map(post => `<p>${post.title}</p>`);
}


document.getElementById('prev').addEventListener('click', () => {
    page = page-1;
    fetchData(page);
});
document.getElementById('next').addEventListener('click', () => {
    page += 1;
    fetchData(page);
});
