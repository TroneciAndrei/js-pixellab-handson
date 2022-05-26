var userName = prompt('Cum te cheama?');
var userNameParagraph = document.getElementById('userName');
var characterCoutParagraph = document.getElementById('characterCount');
var characterCount = userName.replaceAll(' ', '').length;
var letter = 'a';
var letterPresenceParagraph = document.getElementById('letterPresence');
var message = '';

if (userName.toLowerCase().includes(letter) === true) {
  message = `Numele include litera ${letter}`;
} else {
  message = `Numele NU include literea ${letter}`;
}

userNameParagraph.innerHTML = `Ma numesc ${userName}`;
characterCoutParagraph.innerHTML = `Numele introdus are ${characterCount} caractere.`;
letterPresenceParagraph.innerHTML = message;
