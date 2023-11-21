import { tract001 } from '/src/base.js'

const body = document.getElementById('body')
const dialog = document.getElementById('dialog')
const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')

const audio = document.getElementById('audio')
const author = document.getElementById('author')
const bible = document.getElementById('bible')
const date = document.getElementById('date')
const text = document.getElementById('text')
const title = document.getElementById('title')
const number = document.getElementById('number')


openBtn.onclick = () => {
    audio.setAttribute('src', tract001.audio || '')
    author.textContent = tract001.author || ''
    author.setAttribute('href', tract001.link || '*')
    bible.textContent = tract001.bible || ''
    date.textContent = tract001.date || ''
    title.textContent = tract001.title || ''
    number.textContent = tract001.number || ''
    text.textContent = tract001.text || ''

    body.classList.toggle('._locked')
    dialog.showModal()
}

closeBtn.onclick = () => {
    dialog.close()
    body.classList.toggle('._locked')
}

console.log(tract001);