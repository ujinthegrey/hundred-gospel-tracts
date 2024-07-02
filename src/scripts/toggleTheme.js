document.getElementById('toggle-theme-btn').addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
    }
    document.getElementById('burger-icon').classList.remove('active')
    document.getElementById('burger-menu').classList.remove('open')
})