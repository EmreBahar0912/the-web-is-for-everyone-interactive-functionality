const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const menu = document.querySelector('.menu')
const details = document.querySelector('details')
const summaryContent = details.querySelector('ul')

menuOpen.addEventListener('click', () => {
    menu.classList.add('is-open')
    document.body.style.overflow = 'hidden'
})

menuClose.addEventListener('click', () => {
    menu.classList.remove('is-open')
    document.body.style.overflow = ''
})

details.addEventListener('toggle', () => {
    if (details.open) {
        summaryContent.style.maxHeight = summaryContent.scrollHeight + 'px'
    } else {
        summaryContent.style.maxHeight = '0'
    }
})