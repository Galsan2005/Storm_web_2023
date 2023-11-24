document.addEventListener('DOMContentLoaded', function() {
    let dropdown = document.getElementsByClassName('dropdown');

    dropdown[0].addEventListener('mouseover', function() {
        this.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown[0].addEventListener('mouseout', function() {
        this.querySelector('.dropdown-content').style.display = 'none'
    });

    dropdown[1].addEventListener('mouseover', function() {
        this.querySelector('.dropdown-content').style.display = 'block'
    });
    dropdown[1].addEventListener('mouseout', function() {
        this.querySelector('.dropdown-content').style.display = 'none'
    });
});