// Interação JS -- DOM - Document Object Model

/* Abre e fecha o menu quando clicar no icone open e close */

const nav = document.querySelector('#header nav')

const toogle = document.querySelectorAll('nav .toogle')

for (const element of toogle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* Quando clicar em um item do menu, esconder o menu */

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Quando eu der o scroll na página, mudar o Header da Página */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // Scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // Scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
})
