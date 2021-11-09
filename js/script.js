// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

// *************************//
//     LOGICA JAVASCRIPT    //
// *************************//
let html = '';
const container = document.querySelector('.fl-container')
const listNr = [];
const listNrRemember = [];
let timerScelto = 6;
let pausa = 1;

for(let i = 0; i < 5; i++){
  let nR = numRandom (1, 100);
  listNr.push(nR);
  console.log(listNr);
  let str = listNr.join(' ');
  console.log(str);
  html = 
  `
  <h3>Osserva questi numeri per 30 secondi</h3>
  <div class="box-number">${str}</div>
  `
  container.innerHTML = html;
}

// *************************//
//         FUNZIONI         //
// *************************//

//Funzione numeri random
function numRandom (min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}


// Funzione timer
setTimeout (function() {
  console.log('Sono passati 2 secondi');
  
  // html = 
  // `

  // `
  // container.innerHTML = html;

  while (container.firstChild) {
    container.firstChild.remove()
  }
  html = 
  `
  <h3>Scrivi i numeri che ricordi</h3>
  `
  container.innerHTML = html;

  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      const nRemember = parseInt(prompt('Inserisci un numero che ricordi:'));
      listNrRemember.push(nRemember) 
      if((isNaN(nRemember)) || (nRemember < 1 || nRemember > 100)) {
        alert('inserisci un numero valido compreso tra 1 e 100')
        i--;
      }
    }
  }, 1000) 
}, timerScelto * 1000);


