

let titulo = document.querySelector('.h1-inicio');
const strText = titulo.textContent;
const splitText = strText.split("");
titulo.textContent = "";

for (var i=0; i <splitText.length; i++){
    titulo.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick () {
    const span = titulo.querySelectorAll('span')[char];
    span.classList.add ('fade');
    char++;

    if(char >= splitText.length) {
        complete ();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}