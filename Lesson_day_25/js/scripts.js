var container = document.getElementById('container');

var divElement1 = document.createElement('div');
divElement1.setAttribute('id', 'div1');
divElement1.setAttribute('class', 'my-class');
divElement1.setAttribute('style', 'background-color: yellow;');
divElement1.innerHTML = 'Element 1'
container.appendChild(divElement1);

var divElement = document.createElement('div');
divElement.setAttribute('id', 'div2');
divElement.setAttribute('class', 'my-class');
divElement.setAttribute('style', 'background-color: orange;');
divElement.innerHTML = 'Element 2'
container.appendChild(divElement);
