async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');

        const data = await response.json();
        console.log(data);
        const pElement = document.createElement('p');
        pElement.innerHTML = `<h2>${data.title}</h2><p>${data.body}</p>`;
        document.body.appendChild(pElement);
}

fetchData();