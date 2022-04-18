const burger = document.querySelector('.burger')
const menu = document.querySelector('nav')

burger.addEventListener('click', (e) => {
    burger.classList.toggle('is-active')
    menu.classList.toggle('is-active')
})
