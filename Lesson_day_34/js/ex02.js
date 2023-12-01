async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    console.log(data);

    const usersSlice = data.slice(0, 3);
    const userElement = document.createElement('ul');

    usersSlice.map(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        userElement.appendChild(li);
    });
    document.getElementById('users').appendChild(userElement);
}

fetchData();