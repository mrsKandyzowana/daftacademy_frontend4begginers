const nav = document.querySelector('.nav');
const arrow = document.querySelector('.arrow');

if(arrow){
arrow.addEventListener('click', function(){
    arrow.classList.toggle('on');
    nav.classList.toggle('on');
})
};

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

const form = document.querySelector('form');
const data = Object.fromEntries(new FormData(form).entries());
console.log(data);
