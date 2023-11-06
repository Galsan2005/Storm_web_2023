var header = document.createElement("header");
var h1 = document.createElement('h1');

h1.innerHTML = 'Welcome to My Website';
header.appendChild(h1);
document.body.appendChild(header);

var main = document.createElement('main');
var p = document.createElement('p');

p.innerHTML = 'This is a small website created using HTML and JavaScript.';
main.appendChild(p);
document.body.appendChild(main);

var footer = document.createElement('footer');
var p = document.createElement('p');

p.innerHTML = '&copy; 2023 Your Name';
footer.appendChild(p);
document.body.appendChild(footer);