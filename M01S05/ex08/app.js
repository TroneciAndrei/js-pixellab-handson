const btn = document.getElementById('clicker');
const removeBtn = document.getElementById('remove');
const queryBtn = document.getElementById('query');
const message = document.getElementById('message');

const eventListener = () => {
  console.log('Ai apasat butonul');
};

btn.addEventListener('click', eventListener);

removeBtn.addEventListener('click', () => {
  btn.removeEventListener('click', eventListener);
});

queryBtn.addEventListener('click', () => {
  const userAge = prompt('What is your age?');

  message.innerText = `Ai ${userAge} ani`;
});
