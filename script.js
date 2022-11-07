let instaButton = document.querySelector('.instagram');
let faceButton = document.querySelector('.facebook');
let gitbutton = document.querySelector('.github');


//add click event on button

instaButton.addEventListener('click', ()=> {
    window.open('https://www.instagram.com/', '_blank')
});

faceButton.addEventListener('click', ()=> {
    window.open('https://pt-br.facebook.com/', '_blank')
});

gitbutton.addEventListener('click', ()=> {
    window.open('https://github.com/ClaudineRoberto/', '_blank')
});
