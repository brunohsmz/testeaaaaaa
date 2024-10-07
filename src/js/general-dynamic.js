// Esse é o JavaScript para todas as paginas praticamente, (tirando a primeira novamente)

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let header = document.querySelector('header')

let MenuMob = document.querySelector('#menu-mob')
let line1 = document.querySelector('.line-menumob-1')
let line2 = document.querySelector('.line-menumob-2')
let menumobile = document.querySelector('.menu-mobile')


// Modo Escuro
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') { 
        trilho.classList.add('dark'); 
        body.classList.add('dark');
        header.classList.add('dark'); 
    }
}

function toggleTheme() {
    trilho.classList.toggle('dark');
    body.classList.toggle('dark');
    header.classList.toggle('dark'); 
    if (body.classList.contains('dark')) { 
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

trilho.addEventListener('click', toggleTheme);
loadTheme();

// Menu Mobile
MenuMob.addEventListener("click", ()=>{
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
    menumobile.classList.toggle('abrir')
    body.classList.toggle('no-overflow')
    header.classList.toggle('menu-mob-aberto');
})