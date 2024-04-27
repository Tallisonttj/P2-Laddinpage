
//MENU

let menuOpener = document.querySelector('.menu-opener') //pega o elemento menu opener
let nav = document.querySelector('header nav ')

menuOpener.addEventListener('click',() => { //evento de click

    if(nav.classList.contains('opened')){ //se contem a class opened
        nav.classList.remove('opened') // remova ela
        menuOpener.querySelector('.close-icon').style.display = 'none' // O X é fechado 
        menuOpener.querySelector('.hamburguer-icon').style.display = 'flex' //O MENU HAMBURGUER APARECE
       
    }else{
        nav.classList.add('opened') // caso contrario adicione 
        menuOpener.querySelector('.close-icon').style.display = 'flex' // MOSTRA O X 
        menuOpener.querySelector('.hamburguer-icon').style.display = 'none' // esconde o hamburguer
        
}})

//testimonails

let testimonails = [//criamos um array com objetos cada objeto recebe uma frase e uma imagem
    { quote: '"Mais do que nunca, os animais de estimação são tratados como membros da família."', orgin:'cbs.svg' },
    { quote: '"DogDev é um serviço de entrega direto ao consumidor, preparado na hora com ingredientes 100% reais. Ingredientes que os humanos reconheceriam"', orgin:'forbes.svg' },
    { quote: '"DogDev usa ingredientes simples e limpos em seus pratos."', orgin:'fox.svg'},
    { quote: '"Vejo você [João] como um verdadeiro herói"   ', orgin:'sharktank.svg' }
]

// pegamos os elementos no site
let quoeteArea = document.querySelector('.testimonails .quote')
let iconsArea = document.querySelector('.testimonails .icons')


for(let tindex in testimonails){ //criamos um loop que passa por cada objeto no array Testimonails
    let img = document.createElement('img') // e cria uma tag img
    img.setAttribute('src', './assets/images/'+ testimonails[parseInt(tindex)].orgin) //setamos um atributo para pegar a imagem correspondente
    img.style.cursor = 'pointer' // transforma o ponteiro em mãozinha pra identificar que é clicavel
    img.addEventListener('click', () => {fillTestimonial(parseInt(tindex))}) //cria um evento de click
    iconsArea.appendChild(img) // adiciona a imagem na tela
}

let currentTestimonial = 0 // item do momento

let testimonailTimer;//tempo


const fillTestimonial = (index) => {
    clearTimeout(testimonailTimer) // sempre que clicar em um testemunho zera o timer
    currentTestimonial = index //seta o testemunho para o index 
    quoeteArea.innerHTML = testimonails[currentTestimonial].quote //adiciona a frase ao testemunho ativo

    let imgs = iconsArea.querySelectorAll('img') //pega todos icons

    for(let img of imgs){img.style.opacity = 0.2} //pego todas as images e seto como 0.2

    imgs[currentTestimonial].style.opacity = 1 //pega a imagem atual e coloca opacidade 1 

    testimonailTimer = setTimeout(nextTestimonial, 3000) //depois retorna o timer
} //função para preencher o testemunho 


const nextTestimonial = () => {
    if(testimonails[currentTestimonial + 1]){
        fillTestimonial(currentTestimonial +1 )} // se tem index apos o currentatual pega ele
        else{
            fillTestimonial(0) // caso contrario retorna no primeiro
        }

}

nextTestimonial() //executa a função 


// FAQS

let currentFaq = 0; //SETA O PRIMEIRO FAQ
let faqItems = document.querySelectorAll('.faq .accordion .item'); //PEGA OS ELEMENTOS NO HTML 

faqItems.forEach((el, index) => {
    el.querySelector('.title').addEventListener('click', () => setFaq(index));
}); //PASSA POR CADA TITLE E CRIA UM EVENTO DE CLICK

const setFaq = (index) => { //FUNÇAO PARA SETAR O FAQ
    currentFaq = index; // IDENTIFICA O FAQ USUADO

    if (faqItems[currentFaq].classList.contains('opened')) { // SE TIVER A CLASS OPENED 
        faqItems[currentFaq].classList.remove('opened'); //REMOVE ELA
        return;
    }

    for (let item of faqItems) {
        item.classList.remove('opened'); //FAZ UM LOOP EM CADA ITEM NO FAQITENS E REMOVO O OPENED
    }
    faqItems[currentFaq].classList.add('opened'); // E ADICIONA O OPENED SOMENTE NO ITEM CLICADO
}