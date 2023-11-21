const body = document.getElementById('body')
const dialog = document.getElementById('dialog')
const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')

openBtn.onclick = () => {
    body.classList.toggle('._locked')
    dialog.showModal()
}

closeBtn.onclick = () => {
    dialog.close()
    body.classList.toggle('._locked')
}