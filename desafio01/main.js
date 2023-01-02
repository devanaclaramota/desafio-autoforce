//Criando dropdown
let veiculos = document.querySelectorAll("li.nav-item.nav-simple__item")[1];

veiculos.innerHTML = `<li style="--animation-index: 1" class="nav-item nav-simple__item "><a href="/autoforce-ford#" class="nav-link nav-simple__link" data-toggle="dropdown"> Veículos <i class="icon icon-dropdown icon-arrow-d"></i></a><div class="nav-simple-sub card-collapse-deep dropdown-menu"><ul class="list list--border-bottom"><li class=""><a href="/autoforce-ford/novos" class="card-collapse-deep__title"> Novos </a></li><li class=""><a href="/autoforce-ford/seminovos" class="card-collapse-deep__title"> Seminovos </a></li>`;

// Removendo item seminovos

let seminovos = document.querySelectorAll('li.nav-item.nav-simple__item')[3];
seminovos.remove();

//invertendo a ordem/ consorcio

let change = document.querySelectorAll('li.nav-item.nav-simple__item')[3];
change.innerHTML = `<li style="--animation-index: 6" class="nav-item nav-simple__item "><a href="/autoforce-ford/consorcios" class="nav-link nav-simple__link"> Consórcios </a></li>`;

//inserindo entre 2 itens
let insertoferta = document.createElement('li');

    insertoferta.innerHTML = `<li style="--animation-index: 3" class="nav-item nav-simple__item "><a href="/autoforce-ford/ofertas-unicas" class="nav-link nav-simple__link"> Ofertas Únicas </a></li>`;

    let ref = document.querySelectorAll('li.nav-item.nav-simple__item')[6];

let pai = ref.parentNode;

pai.insertBefore(insertoferta, ref);

insertoferta.style.paddingTop = '20px';
//removendo consercio e blog
let consorcioRemove = document.querySelectorAll('li.nav-item.nav-simple__item')[8];

consorcioRemove.remove();
let blogRemove = document.querySelectorAll('li.nav-item.nav-simple__item')[8];

blogRemove.remove();