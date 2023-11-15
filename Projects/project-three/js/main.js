// slide profile
let currentSlide = 0;

function showSlide (index) {
    const slider = document.getElementsByClassName('slider');
    const slides = document.getElementsByClassName('slide');
    if (index >=slides.length) {
        currentSlide = 0;
    } else if (index < 0){
        currentSlide = slides.length - 1 ;
    } else {
        currentSlide = index;
    }
    const translateValue = -currentSlide * 100 + "%";
    slider[0].setAttribute('style', 'transform: translateX(' + translateValue + ')');
}

function prevSlide(){
    showSlide(currentSlide - 1);
}

function nextSlide(){
    showSlide(currentSlide + 1);
}

// sign up
function openForm(){
    document.getElementById('myForm').style.display = "block";

    document.addEventListener('click', closeFormOutside);

    document.getElementById("full").setAttribute("style", "z-index: 1; background: linear-gradient(180deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.50) 100%);")
}

function closeForm(){
    document.getElementById('myForm').style.display = "none";

    document.removeEventListener('click', closeFormOutside);

    document.getElementById("full").setAttribute("style", "background-color: none")

}

function closeFormOutside(event) {
    const form = document.getElementById('myForm');
    if (!form.contains(event.target) && event.target !== document.getElementById('openBtn')) {
        closeForm();
    }
}
// dropdown js

document.addEventListener('DOMContentLoaded', function() {
    let dropdown = document.querySelector('.header-nav-box-1');

    dropdown.addEventListener('mouseover', function() {
        this.querySelector('.dropdown-content').style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function() {
        this.querySelector('.dropdown-content').style.display = 'none'
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let dropdown = document.querySelector('.header-nav-box-2');

    dropdown.addEventListener('mouseover', function() {
        this.querySelector('.dropdown-content-1').style.display = 'block';
    });

    dropdown.addEventListener('mouseout', function() {
        this.querySelector('.dropdown-content-1').style.display = 'none'
    });
});