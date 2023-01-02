//remover o card
let card = document.querySelector('#header-card-whatsapp');
card.remove();

// add link

let btn = document.querySelector('body > div.page.page--home > div > header > div.container > div.header-desktop.d-none.d-md-block > div > div.header__navbar-item.header__phones > div:nth-child(3) > button');

btn.innerHTML = `<a href="https://wa.me/5522999772403" target="_blank" rel="noopener noreferrer"> <i class="icon icon-whatsapp"></i> Whatsapp</a>`;

//cor branca

let a = document.querySelector('body > div.page.page--home > div > header > div.container > div.header-desktop.d-none.d-md-block > div > div.header__navbar-item.header__phones > div:nth-child(3) > button > a');

a.style.color = 'white';