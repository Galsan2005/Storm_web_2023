const users = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bred',
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
    },
    {
        id: 3,
        name: 'Clemantine Bauch',
        username: 'Samanta',
    },
    {
        id: 4,
        name: 'Patrica',
        username: 'Karianne',
    },
    {
        id: 5,
        name: 'CHelsey Dietric',
        username: 'Karmen',
    },
    {
        id: 6, 
        name: 'Mrs. Dennis Schuist',
        username: 'Leopoldo_Cokery',
    },
]

function searchUser(keyword) {
    const filteredUsers = users.filter(user => user.name.includes(keyword));
    document.getElementById('searchResults').innerHTML = filteredUsers.map(user => `<p>${user.name}</p>`).join('');
}

document.getElementById('searchBox').addEventListener('input', (e) => searchUser(e.target.value));