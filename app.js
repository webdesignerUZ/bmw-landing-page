const upArrow = document.querySelector('.up-arrow');
const downArrow = document.querySelector('.down-arrow');
const infoBox = document.querySelector('.info');

const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const imageContainer = document.querySelector('.image-container');
const carName = document.querySelector('.carName');
const carName2 = document.querySelector('.carName2');

const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.fa-times');
const navbar = document.querySelector('.navbar');

const zero = document.querySelector('.zero');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');



menu.addEventListener('click', ()=>{
    navbar.style.transform = 'translateX(0)';
})
closeBtn.addEventListener('click', ()=>{
    navbar.style.transform = 'translateX(300px)';
})



let counter = 0;
const images = [
    'white.png',
    'first.png',
    'second.png',
    'third.png',
    'fourth.png'
];

const carNames = [
    'bmw i8 coupe',
    'BMW 8 Series',
    'BMW Isetta',
    'BMW 8 Series',
    'bmw 303 selta'
];


imageContainer.src = images[counter];
carName.innerHTML = carNames[counter];
carName2.innerHTML = carNames[counter];

rightArrow.addEventListener('click', ()=>{
    if(counter < images.length-1){
        counter++;
        imageContainer.src = images[counter];
        carName.innerHTML = carNames[counter];
        carName2.innerHTML = carNames[counter];
    }
})

leftArrow.addEventListener('click', ()=>{
    if(counter > 0){
        counter--;
        imageContainer.src = images[counter];
        carName.innerHTML = carNames[counter];
        carName2.innerHTML = carNames[counter];
    }
})



zero.addEventListener('click', ()=>{
    counter = 0;
    imageContainer.src = images[counter];
    carName.innerHTML = carNames[counter];
    carName2.innerHTML = carNames[counter];
})
one.addEventListener('click', ()=>{
    counter = 1;
    imageContainer.src = images[counter];
    carName.innerHTML = carNames[counter];
    carName2.innerHTML = carNames[counter];
})
two.addEventListener('click', ()=>{
    counter = 2;
    imageContainer.src = images[counter];
    carName.innerHTML = carNames[counter];
    carName2.innerHTML = carNames[counter];
})
three.addEventListener('click', ()=>{
    counter = 3;
    imageContainer.src = images[counter];
    carName.innerHTML = carNames[counter];
    carName2.innerHTML = carNames[counter];
})
four.addEventListener('click', ()=>{
    counter = 4;
    imageContainer.src = images[counter];
    carName.innerHTML = carNames[counter];
    carName2.innerHTML = carNames[counter];
})






upArrow.addEventListener('click', ()=>{
    infoBox.style.transform = 'translateY(0)';
    upArrow.style.display = 'none';
    downArrow.style.display = 'block';
    downArrow.style.transform = 'translateY(-26px)'
})

downArrow.addEventListener('click', ()=>{
    infoBox.style.transform = 'translateY(130px)';
    upArrow.style.display = 'block';
    downArrow.style.display = 'none';
})


