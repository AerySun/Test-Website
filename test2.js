document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('a.arrow-wrapper')
  const menu = document.querySelector('.right-side .menu')
  let menuOpen = false
  menuButton.addEventListener('click', (e) => {
    menu.style.display = menuOpen ? 'none' : 'flex'
    menuOpen = !menuOpen
    // if (menuOpen) {
    //   menu.style.display = 'none'
    //   menuOpen = false
    // } else {
    //   menu.style.display = 'flex'
    //   menuOpen = true
    // }

    e.preventDefault()
    e.stopPropagation()
  })
  document.addEventListener('click', () => {
    menu.style.display = 'none'
    menuOpen = false
  })
})
