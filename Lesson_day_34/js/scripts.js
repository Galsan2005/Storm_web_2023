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

const usersSlice = users.slice(1, 4);

const userElement = document.createElement('ul');

usersSlice.forEach(user => {
    const li = document.createElement('li');
    li.textContent = user.username;
    userElement.appendChild(li);
});

document.body.appendChild(userElement);