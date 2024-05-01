/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    delay: 100,
    // reset: true
})

sr.reveal(`.home__data, .home__social`)
sr.reveal(`.home__image`, {origin: 'right'})
sr.reveal(`.about__section__left`, {origin: 'left'})
sr.reveal(`.about__section__right`, {origin: 'right'})