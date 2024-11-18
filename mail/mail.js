/*
Mail

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.

1. Mi creo diverse email con un array;
2. Chiedo all'utente di inserire la sua email con un prompt;
3. Uso un ciclo for per controllare se nella lista delle email, l'email risulta autorizzata;
4. Stampo un messaggio per sull'esito dell'email con una condizione se è consentita o negata.  


*/
/* 1. Mi creo diverse email con un array

la prima email: pippofranco67@gmail.com
la seconda email: peppoquintale@gmail.com
la terza email: methodman23@gmail.com
la quarta email: stivmadden@gmail.com
la quinta email: cicciocaputo@gmail.com

*/

//lista email
const emailAutorizzate = ["pippofranco67@gmail.com", "peppoquintale@gmail.com","methodman23@gmail.com","stivmadden@gmail.com", "cicciocaputo@gmail.com"];

// 2. Chiedo all'utente di inserire la sua email con un prompt
const emailUtente = prompt ("Prego inserisci la tua email");

// 3. Uso un ciclo for per controllare se nella lista delle email, l'email risulta autorizzata
let emailAutorizzata = false

for (let i = 0; i < emailAutorizzate.length; i++) {
    if (emailAutorizzate[i] === emailUtente) {
        emailAutorizzata = true; 
        break;
    }
}

// 4. Stampo un messaggio per sull'esito dell'email con una condizione se è consentita o negata.
if (emailAutorizzata) {
    console.log("Accesso consentito, Benvenuto! ");
} else {
    console.log("Accesso negato, riprova con un'altra email");
}