// Custom Scripts
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
            if (!menu.classList.contains('active')) {
                menu.classList.add('active')
                burger.classList.add('active')
                body.classList.add('locked')
            } else {
                menu.classList.remove('active')
                burger.classList.remove('active')
                body.classList.remove('locked')
            }
        })
        // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()
    // Init phone mask
const maskElement = document.querySelector('.phone__input')
const maskOptions = {
    mask: '+{7}(000)000-00-00',
}
const mask = IMask(maskElement, maskOptions)
