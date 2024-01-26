const nav = document.querySelector('.mobile-nav--js');
const barBtn = document.querySelector('.bar-btn--js');
const closeBtn = document.querySelector('.close-btn--js')

barBtn.addEventListener('click', ()=>{
    nav.classList.remove('hidden')
    closeBtn.classList.remove('hidden');
    barBtn.classList.add('hidden')
})

closeBtn.addEventListener('click', ()=>{
    nav.classList.add('hidden');
    barBtn.classList.remove('hidden');
    closeBtn.classList.add('hidden')

})