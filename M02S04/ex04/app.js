document.addEventListener('DOMContentLoaded', () => {
  const personForm = document.querySelector('#personForm');
  const submitButton = personForm.querySelector('button[type="submit"]');

  const pristine = new Pristine(personForm);
  const isValid = pristine.validate(true);

  if (isValid === false) {
    submitButton.disabled = true;
  }

  personForm.addEventListener('input', (event) => {
    const formControl = event.target;

    if (formControl.name === undefined && formControl.name.length <= 0) {
      return;
    }

    const isValid = pristine.validate(true);
    // daca isValid => disabled = false
    // if !Isvalid => disabled = true
    submitButton.disabled = !isValid;
  });

  personForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // do ajax struff
  });
});
