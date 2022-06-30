const image=document.querySelector('#myImage');
const text=document.querySelector('h2');

const buttonOne=document.querySelector('#one');
const buttonTwo=document.querySelector('#two');

buttonOne.addEventListener('click', mrBig);
buttonTwo.addEventListener('click',aiden);


function mrBig () {
  image.setAttribute("src", "DjonKerry.jpg ");
  text.innerHTML="ОНИ ПОЖЕНЯТЬСЯ?";
  buttonOne.innerHTML="ДА, НО НЕ СРАЗУ";
  buttonTwo.innerHTML="НИКОГДА";

 buttonOne.addEventListener('click', wedding);
 buttonTwo.addEventListener('click', neverMarried)

}


function wedding(){
    image.setAttribute("src", "https://kino.24tv.ua/resources/photos/news/202107/1687636.jpg?v=1626451815000&w=1200&h=675&fit=cover ");
  text.innerHTML="ОНИ ПОЖЕНЯТЬСЯ, НО НЕ СРАЗУ И У НИХ НЕ БУДЕТ ДЕТЕЙ";
  buttonOne.style='display:none'
  buttonTwo.style='display:none'
}
function neverMarried(){
    image.setAttribute("src", "https://www.thevoicemag.ru/upload/img_cache/6a2/6a26f0d34f1e53576cfc9c10a0325bde_cropped_666x441.webp");
    text.textContent="ОН ЕЕ БРОСИТ У АЛТАРЯ!";
    buttonOne.style='display:none'
    buttonTwo.style='display:none'
}  
function aiden(){
    image.setAttribute("src","https://peopletalk.ru/wp-content/uploads/2021/04/09721d97dce3e03dded8e1ba5dd95dc4_ce_620x350x0x0_cropped_630x350_labeled-6666cd76f96956469e7be39d750cc7d9.jpg");
    text.innerHTML="ОНИ БУДУТ СЧАСТЛИВЫ?";
    buttonOne.innerHTML="ДА";
    buttonTwo.innerHTML="НЕТ";

    buttonOne.addEventListener('click', happy);
    buttonTwo.addEventListener('click', unhappy);
}

function happy(){
    image.setAttribute("src","https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/5af66da6-fdd8-4953-982e-2a05ef5634c2/1920x");
    text.textContent="ДА, И У НИХ РОДИТЬСЯ РЕБЕНОК";
    buttonOne.style='display:none'
    buttonTwo.style='display:none'
}
function unhappy(){
    image.setAttribute("src","https://i.obozrevatel.com/gallery/2021/4/16/68.jfif");
    text.textContent="НЕТ, ОНИ РАЗОЙДУТЬСЯ ИЗ-ЗА ИЗМЕНЫ КЕРРИ!";
    buttonOne.style='display:none'
    buttonTwo.style='display:none'
}

