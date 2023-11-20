const dialog = document.getElementById('dialog')
const openBtn = document.getElementById('open')

openBtn.onclick = () => {
    console.log('open!!!');
    dialog.showModal()
}