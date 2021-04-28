alert('Welcome');

//Creare lista di email
var listaEmails = ['luca@hotmail.it', 'luigi@yahoo.it', 'sergio@kinko.com', 'martina@tiscali.it'];

//Chiedere email all'utente
var emailUtente = (prompt('inserisci la tua email per verificare se sei tra i partecipanti'));
console.log(emailUtente);
var emailPresente = false;

//Verificare presenza email dell'utente nella lista listaemail
for (var i=0; i<listaEmails.length; i++){
  var emails = listaEmails[i];
  if(emailUtente==emails){
    emailPresente = true;
  }
}

//Comunicare il responso all'utente
console.log(emailPresente);
if(emailPresente==false){
  console.log('email non presente');
}
else{
  console.log('email presente');
}
