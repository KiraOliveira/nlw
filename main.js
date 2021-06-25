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

/*const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function (event) {
    event.preventDefault()

    nav.classList.remove('show')
    scrollSmooth(link)
  })
}*/

/* Quando eu der o scroll na página, mudar o Header da Página */

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // Scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // Scroll é menor que a altura do header
    header.classList.remove('scroll')
  }
}

/* Testimonials carousel slider swiper */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    1200: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* ScroolReveal: Mostrar elemnentos quando der scroll na página*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
   #about .text, #about .image,
   #services header, #services .card,
   #testimonials header, #testimonials .testimonials,
   #contact .text, #contact .links,
   footer .brand, footer ,social`,
  { interval: 100 }
)

/* Scroll Suave*/
//1. Pegar todos os items do menu, ao clicar em algum item rolar, a página suavemente para a sessão desejada
/*
function scrollSmooth(link) {
  const sectionId = link.getAttribute('href')
  document.querySelector(sectionId).scrollIntoView({
    behavior: 'smoth'
  })
}*/

/* Back to Top*/

const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* Menu ativo conforme a sessão visível na página*/
const sections = document.querySelectorAll('main section[id]')

function activateMenuCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* When Scroll*/
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuCurrentSection()
})
