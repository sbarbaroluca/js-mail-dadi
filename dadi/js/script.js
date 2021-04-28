alert('Are you ready?');

// Giocatore 1 lancio dado da 1 a 6
alert('turno Player 1');
var numeroPlayer1 = Math.floor(Math.random() * 6) + 1;
console.log(numeroPlayer1);

//Giocatore 2 lancio dado da 1 a 6
alert('turno Player2');
var numeroPlayer2 = Math.floor(Math.random() * 6) + 1;
console.log(numeroPlayer2);

//Confronto tra i due numeri usciti e vincita numero più alto
if(numeroPlayer1>numeroPlayer2){
  console.log('vince Player1');
}
else if(numeroPlayer1==numeroPlayer2){
  console.log('parità');
}
else{
  console.log('vince Player2');
}