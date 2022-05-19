console.log('Imi fac tema la JavaScript.');
alert('Bine ai venit!');
var nume = prompt('Bine ai venit, cum te cheama?');
console.log(nume);

var text = document.getElementById('text');
var btn = document.getElementById('btn');
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');

text.addEventListener('click', function () {
  alert('Troneci Andrei');
});

btn.addEventListener('click', function () {
  console.log('Am fost apasat.');
});

btn1.addEventListener('click', function () {
  alert('Am fost apasat.');
});

btn2.addEventListener('mouseover', function () {
  console.log('Ai vrea sa apesi acest buton?');
});

btn3.addEventListener('mouseover', function () {
  var login = prompt('Add username');
  console.log(login);
});
