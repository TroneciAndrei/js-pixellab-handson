$(function () {
  $('#personForm')
    .on('submit', function (e) {
      e.preventDefault();
      // imbracam obiectul de DOM in obiect jQuerry
      const $form = $(this);
      // folosim obiectul de DOM ca argument
      const formData = new FormData(this);

      $form.after(renderData(formData));
    })
    .find('fieldset:nth-child(2)')
    .append(renderSkillControls());

  // hoisting
  // doar pentru function
  function renderPerson(formData) {
    const name = formData.get('name');
    const surname = formData.get('surname');
    const age = formData.get('age');

    const $person = $('<p></p>', {
      text: `${name} ${surname}: ${age}`,
    });

    return $person;
  }

  function renderData(formData) {
    const $container = $('<div></div>', {
      class: 'personDisplay',
    });

    $container.append(renderPerson(formData)).append(renderSkills(formData));

    return $container;
  }

  function renderSkills(formData) {
    const iterator = formData.entries();
    const objectData = Object.fromEntries(iterator);

    const keys = Object.keys(objectData);
    const skillsArray = [];

    for (let i = 0; i < keys.length; i++) {
      const keyName = keys[i];

      // mai e un bug
      if (keyName === 'skill-input') continue;

      skillsArray.push(objectData[keyName]);
    }

    const $p = $('<p>', {
      text: `Skills: ${skillsArray}`,
    });

    return $p;
  }

  function renderSkillControls() {
    function renderSkillsUl(skill) {
      const skillsClassName = 'renderSkillsUl';
      let $ul = $(`.${skillsClassName}`);

      if ($ul.length <= 0) {
        $ul = $('<ul>', {
          class: skillsClassName,
        });
      }

      $('<li>', {
        text: skill,
      })
        .append(
          $('<button>', {
            type: 'button',
            text: '-',
            class: 'removeSkillButton',
            title: 'Elimina Skill',
          }),
        )
        .append(
          $('<input>', {
            type: 'hidden',
            name: `skill-${skill}`,
            value: skill,
          }),
        )
        .appendTo($ul);

      return $ul;
    }

    const $skillInput = $('<input>', {
      placeholder: 'Skill',
      type: 'text',
      name: 'skill-input',
    });

    const $addButton = $('<button>', {
      text: 'Adauga skill',
      title: 'Adauga skill',
      type: 'button',
    }).on('click', function () {
      const $button = $(this);
      const inputValue = $button.prev().val().trim();

      if (inputValue.length < 1) return;

      $button.after(renderSkillsUl(inputValue));

      $button.prev().val('');
    });

    const $container = $('<div>').append($skillInput).append($addButton);

    return $container;
  }
});
