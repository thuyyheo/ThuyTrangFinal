/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    };
}
showMenu('nav-toggle','nav-menu')


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.menu-link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '30px',
    duration: 2000,
    reset: true,
});

sr.reveal(`.item,.describe-content`,{
    origin:'top',
})
sr.reveal(`.services-img,.super-awesome-info`,{
    origin:'left',
})

sr.reveal(`.about-content,.super-awesome-block-odd`,{
    origin:'left',
})

sr.reveal(`.about-statistic,super-awesome-block.even,.services-content`,{
    origin:'right',
})

