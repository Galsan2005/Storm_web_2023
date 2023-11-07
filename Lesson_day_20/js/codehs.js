 //Write your prompts here
 var myName = prompt('What is your name?');
 var favoriteSnack = prompt("What is your favorite snack?");
 var favoriteTv = prompt("What's your favorite tv show?");
 
 var welcome = document.getElementById("welcome");
 console.log(welcome)
 var snack = document.getElementById("snack");
 var tvshow = document.getElementById("tv-show");
 
 welcome.innerHTML = "welcome " + myName;
 snack.innerHTML = "Your favorite snack is " + favoriteSnack;
 tvshow.innerHTML = "Your favorite tv-show is " + favoriteTv;
 