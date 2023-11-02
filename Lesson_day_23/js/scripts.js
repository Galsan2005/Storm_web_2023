console.log("Lesson Day 23 - HTML function, this keyboard");

const todayTopics = ["HTML Function", "This keyboard", "Makeing Keyboard small project"];
console.log(todayTopics);

const topicHeader = document.createElement("h2");
topicHeader.innerHTML = "Өнөөөдрийн хичээл:";
let content = document.getElementById("content");
content.appendChild(topicHeader);

var ulElement = document.createElement("ul");
for(i = 0; i < todayTopics.length; i++){
        var liElement = document.createElement("li");
        liElement.innerHTML= todayTopics[i];
        ulElement.appendChild(liElement);
}

content.appendChild(ulElement);

topicHeader.addEventListener('click', paintRed);
topicHeader.addEventListener('mouseover', makeBigger);
topicHeader.addEventListener('mouseout', makeNormal);

function paintRed(){
    topicHeader.style.color = 'red';
}

function makeBigger(){
    topicHeader.style.fontSize = "70px";
}

function makeNormal(){
    topicHeader.style.fontSize = "20px";
}

function paintBlue(element){
    if(element.hasAttribute('style')){
        element.removeAttribute('style');
    }else{
        element.style.color="blue"
    }
    
}