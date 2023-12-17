const readBtns = document.querySelectorAll('._btn-read')
const hideTexts = document.querySelectorAll('.tract__hide')

for (let i = 0; i < readBtns.length; i++) {
    readBtns[i].onclick = (e) => {
        hideTexts[i].classList.toggle('show')
        if (e.target.innerHTML.includes('Читать')) {
            e.target.innerHTML = 'Скрыть'
        } else {
            e.target.innerHTML = 'Читать'
        }
        
    }
}