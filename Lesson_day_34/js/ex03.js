async function fetchData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    console.log(data);
    function searchUser(keyword) {
        const filteredUsers = data.filter(user => user.title.includes(keyword));
        document.getElementById('searchResults').innerHTML = filteredUsers.map(user => `<p>${user.title}</p>`).join('');
    }
    document.getElementById('searchBox').addEventListener('input', (e) => searchUser(e.target.value));
}



fetchData();