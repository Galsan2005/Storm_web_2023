console.log('Lesson Day 22 - JS DOM HTML functions');

let h2Element = document.createElement('h2');
h2Element.innerHTML= 'My favorite Foods';
h2Element.setAttribute("class", "my-favorite-food");

let contentElement = document.getElementById('content');
contentElement.appendChild(h2Element);

let foods = ["Buuz", "Huushuur", "Horhog", "Tsartsaamag"];
let ul = document.createElement('ul');
for(let i=0; i<foods.length; i++){
    let liElement = document.createElement('li');
    liElement.innerText = foods[i];
    ul.appendChild(liElement);
    contentElement.appendChild(ul);
}

let clickMeButton = document.createElement('button');
clickMeButton.innerHTML = 'Click Me';
clickMeButton.setAttribute('style', 'border: 1px solid red; padding: 10px; font-size: 20px;');

contentElement.appendChild(clickMeButton);
function showAlert(){
    alert('Hello World');
}

clickMeButton.addEventListener('click', showAlert);