let links = document.querySelector('nav ul');

let bars = document.querySelector('.fa-bars');

bars.onclick = function () {
    links.classList.toggle('fade')
}