const getPersonsButton = document.querySelector('#getPersons');

const renderPersons = (persons) => {
  // const personsUl = document.createElement('ul');
  let personsUl = document.querySelector('.personsUl');

  if (personsUl === null) {
    personsUl = document.createElement('ul');
    personsUl.classList.add('personsUl');
  }

  personsUl.innerHTML = '';

  persons.forEach((person) => {
    const { name, surname } = person;
    const fullName = `${name} ${surname}`;

    const personLi = document.createElement('li');
    personLi.innerText = fullName;

    personsUl.append(personLi);
  });

  document.body.append(personsUl);
};

const getPersons = () => {
  // fetch('http://localhost:8080/persons')
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((persons) => {
  //     // console.log(persons);
  //     renderPersons(persons);
  //   });

  axios.get('http://localhost:8080/persons').then((response) => {
    const { data: persons } = response;

    renderPersons(persons);
  });
};

getPersons();

getPersonsButton.addEventListener('click', getPersons);

const personForm = document.querySelector('#personForm');
personForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const name = form.name.value;
  const surname = form.surname.value;

  // fetch('http://localhost:8080/persons', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     id: Date.now(),
  //     name,
  //     surname,
  //     skills: [],
  //   }),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then(getPersons);

  axios
    .post('http://localhost:8080/persons', {
      name,
      surname,
    })
    .then(getPersons);
});
