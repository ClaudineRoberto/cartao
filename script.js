let instaButton = document.querySelector('.instagram');
let faceButton = document.querySelector('.facebook');
let gitButton = document.querySelector('.github');
let emailButton = document.querySelector('.email')


//add click event on button

instaButton.addEventListener('click', ()=> {
    window.open('https://www.instagram.com/', '_blank')
});

faceButton.addEventListener('click', ()=> {
    window.open('https://pt-br.facebook.com/', '_blank')
});

gitButton.addEventListener('click', ()=> {
    window.open('https://github.com/ClaudineRoberto/', '_blank')
});

emailButton.addEventListener('click', ()=> {
    window.open('mailto:claudineroberto@hotmail.com', '_blank')
});
