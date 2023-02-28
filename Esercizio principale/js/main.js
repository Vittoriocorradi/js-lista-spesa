'use strict';

const elementiLista = ['pane', 'acqua', 'uova', 'latte', 'farina'];
const listaSpesa = document.getElementById('lista-spesa');
let i = 0;

while (i < elementiLista.length) {
    listaSpesa.innerHTML += `<li>${elementiLista[i]}</li>`;
    console.log(elementiLista[i]);
    i++
}
