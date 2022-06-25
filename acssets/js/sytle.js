$ = document.querySelector.bind(document)
$$ = document.querySelectorAll.bind(document)

// Header Scroll
const header__nav = $('.header__nav')
const header__menu = $('.header__menu')

window.addEventListener('scroll', scrollFunction)
function scrollFunction() {
    if(document.documentElement.scrollTop >= 100 || document.body.scrollTop >= 100) {
        header__nav.classList.add('hide')
        header__menu.classList.add('scroll')
    } else {
        header__nav.classList.remove('hide')
        header__menu.classList.remove('scroll')
    }
}