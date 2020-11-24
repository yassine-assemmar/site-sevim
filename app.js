const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const p = document.querySelector('.hero p');
    
       
    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.7}s`
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
    
}

navSlide();

const p = document.querySelector('.hero p');

const sr = ScrollReveal({
    origin: 'top',
    duration: 3000,
    reset: true
});
sr.reveal('.principal h1',{
    distance: '200px',
    delay: 200,
    scale: 0
});
sr.reveal(p, {
    distance: '50px',
    scale: 0.85,
    delay:100
});
sr.reveal('.btn',{
    distance: '50px',
    scale: 0.85,
    delay:1500
});
