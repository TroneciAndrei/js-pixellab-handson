// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

const $body = $('body');
const $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul e scris cu Jquerry',
  class: 'clase de css',
});
$p.appendTo($body);

const $p2 = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
});
$body.append($p2);

setTimeout(function () {
  $p2.addClass('error');
}, 5000);

$('#myParagraph').text('Am schimbat dinamic');

$('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($p2);

$('<h2>', {
  text: 'Mesaje',
}).prependTo($('.container'));
