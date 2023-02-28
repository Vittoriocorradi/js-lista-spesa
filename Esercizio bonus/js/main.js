'use-strict';

const listaCiboBevande = [];
const listaAccessoriVettovaglie = [];
const bottoneAggiunta = document.getElementById('bottone-aggiunta');
const nuovoArticolo = document.getElementById('nuovo-articolo');
const ciboBevande = document.getElementById('cibo-bevande');
const accessoriVettovaglie = document.getElementById('accessori-vettovaglie');
const stampaListaCiboBevande = document.getElementById('lista-cibi-bevande');
const stampaListaAccessoriVettovaglie = document.getElementById('lista-accessori-vettovaglie');

bottoneAggiunta.addEventListener('click',
function() {

    if (ciboBevande.checked) {
        listaCiboBevande.push(nuovoArticolo.value);
        stampaListaCiboBevande.innerHTML += `<li>${nuovoArticolo.value}`;
        console.log(listaCiboBevande);
    } else if (accessoriVettovaglie.checked) {
        listaAccessoriVettovaglie.push(nuovoArticolo.value);
        stampaListaAccessoriVettovaglie.innerHTML += `<li>${nuovoArticolo.value}`;
        console.log(listaAccessoriVettovaglie)
    }
})