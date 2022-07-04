const navBar = document.querySelector('nav')


const handBurgerNavResize = document.querySelector('.nav-resize-controller')

handBurgerNavResize.addEventListener('click',()=>{
    navBar.classList.toggle('resize-nav')
})

const handBurgerMobileResize = document.querySelector('.nav-mobile-controller')

handBurgerMobileResize.addEventListener('click',()=>{
    navBar.classList.toggle('nav-slide-in')
    const body = document.querySelector('body')
    body.classList.add('overlay')
    body.style.overflow = "hidden";
    if(!navBar.contains('nav-slide-in')){
        body.style.overflow = "visible"
    }
})

const content = document.querySelector('.content').addEventListener('click',()=>{
    navBar.classList.remove('nav-slide-in')
    const body = document.querySelector('body')
    body.classList.remove('overlay')
    body.style.overflow = "visible";
})