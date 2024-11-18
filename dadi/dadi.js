/*
Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

Stabilire il vincitore, in base a chi fa il punteggio più alto.

1. Chiedo al giocatore di lanciare i dadi con un alert
2. Inserisco dei numeri casuali da 1 a 6 sia per il giocatore che per la CPU
3. Confronto con una condizione i punteggi e mostro il risultato

*/


// 1. Chiedo al giocatore di lanciare i dadi con un alert

const player = alert ("Lanciare i dadi");

// 2. Inserisco dei numeri casuali da 1 a 6 sia per il giocatore che per la CPU

const giocatore = Math.floor(Math.random() * 6) + 1;

const computer = Math.floor(Math.random() * 6) + 1;

// 3. Confronto con una condizione i punteggi e mostro il risultato

if (giocatore > computer) {
  console.log("Hai vinto! Il tuo punteggio:", giocatore, "contro", computer, "del computer.");
} else if (giocatore < computer) {
  console.log("Hai perso! Il computer ha ottenuto:", computer, "contro il tuo", giocatore);
} else {
  console.log("Pareggio! Entrambi avete ottenuto:", giocatore);
}