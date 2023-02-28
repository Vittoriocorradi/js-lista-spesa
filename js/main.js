'use strict';

// const elementiLista = ['pane', 'acqua', 'uova', 'latte', 'farina'];
const elementiLista = [];
const listaSpesa = document.getElementById('lista-spesa');
let i = 0;
const bottoneAggiungi = document.getElementById('bottone');
const nuovoArticolo = document.getElementById('nuovo-articolo');

// Evento per aggiungere personalmente elementi alla lista
bottoneAggiungi.addEventListener('click',
function() {
    elementiLista.push(nuovoArticolo.value);
    listaSpesa.innerHTML += `<li>${nuovoArticolo.value}</li>`;
    console.log(nuovoArticolo.value);
}
)

