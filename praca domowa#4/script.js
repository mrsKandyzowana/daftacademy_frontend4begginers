//hamburger menu
const nav = document.querySelector('.nav');
const arrow = document.querySelector('.arrow');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
const closeMenu = document.querySelector('.xMenu');

if(arrow){
arrow.addEventListener('click', function(){
    arrow.classList.toggle('on');
    nav.classList.toggle('on');
    hamburgerMenu.classList.toggle('on');
    closeMenu.classList.toggle('on');
})
};

//concerts section
var button1 = document.querySelector(".button--concerts1");
var button2 = document.querySelector(".button--concerts2");
var button3 = document.querySelector(".button--concerts3");
var button4 = document.querySelector(".button--concerts4");
var paragraph = document.createElement("p");

paragraph.innerHTML="Have fun!"

button1.addEventListener('click', function(){
    button1.parentNode.replaceChild(paragraph, button1);
});

button2.addEventListener('click', function(){
    button2.parentNode.replaceChild(paragraph, button2);
});

button3.addEventListener('click', function(){
    button3.parentNode.replaceChild(paragraph, button3);
});

button4.addEventListener('click', function(){
    button4.parentNode.replaceChild(paragraph, button4);
});

// form 
const contactForm = document.querySelector('.contact__form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);
});

// mouseOut animation
const galleryImages = document.querySelectorAll('.gallery__image');

galleryImages.forEach(el => el.addEventListener('mouseout', e => {
    el.classList.add('mouseOut');
}));
