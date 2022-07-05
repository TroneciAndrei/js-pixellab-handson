$(function () {
  $('#personForm')
    .on('submit', function (e) {
      e.preventDefault();
      // imbracam obiectul de DOM in obiect jQuerry
      const $form = $(this);
      // folosim obiectul de DOM ca argument
      const formData = new FormData(this);

      $form.after(renderData(formData));

      $form.trigger('reset');
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
    let $container = $('.personDisplay');

    if ($container.length <= 0) {
      $container = $('<div></div>', {
        class: 'personDisplay',
      });
    }

    $container
      .empty()
      .append(renderPerson(formData))
      .append(renderSkills(formData));

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
      if (keyName === 'skill-input' || !keyName.startsWith('skill-')) continue;

      skillsArray.push(objectData[keyName]);
    }

    if (skillsArray.length <= 0) return '';

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

      $ul
        .on('click', '.removeSkillButton', function () {
          const $removeSkillButton = $(this);

          $removeSkillButton.parent().remove();
        })
        .on('click', '.editSkillButton', function () {
          const $editSkillButton = $(this);

          $editSkillButton
            .siblings('input[name^= "skill-"]')
            .attr('type', 'text');

          $editSkillButton.siblings('.skillDisplay').hide();
          $editSkillButton.siblings('.removeSkillButton').hide();
          $editSkillButton.siblings('.cancelSkillButton').show();
          $editSkillButton.siblings('.saveSkillButton').show();
          $editSkillButton.hide();
        })
        .on('click', '.cancelSkillButton', function () {
          const $cancelButton = $(this);

          $cancelButton.hide();
          $cancelButton
            .siblings('input[name^="skill-"]')
            .attr('type', 'hidden');
          $cancelButton.siblings('.saveSkillButton').hide();
          $cancelButton.siblings('.skillDisplay').show();
          $cancelButton.siblings('.removeSkillButton').show();
          $cancelButton.siblings('.editSkillButton').show();
        })
        .on('click', '.saveSkillButton', function () {
          const $saveButton = $(this);

          $saveButton
            .siblings('.skillDisplay')
            .text($saveButton.siblings('input[name^="skill-"]').val());

          // insert code from homework here
        });

      $('<li>')
        .append(
          $('<span>', {
            text: skill,
            class: 'skillDisplay',
          }),
        )
        .append(
          $('<input>', {
            type: 'hidden',
            name: `skill-${skill}`,
            value: skill,
          }),
        )
        .append(
          $('<button>', {
            type: 'button',
            text: '-',
            class: 'removeSkillButton',
            title: 'Elimina Skill',
          }),
        )
        .append(
          $('<button>', {
            type: 'button',
            text: 'Editeaza',
            class: 'editSkillButton',
            title: 'Editeaza skill',
          }),
        )
        .append(
          $('<button>', {
            type: 'button',
            text: 'Salveaza',
            class: 'saveSkillButton',
            title: 'Salveaza skill',
          }).hide(),
        )
        .append(
          $('<button>', {
            type: 'button',
            text: 'Anuleaza',
            class: 'cancelSkillButton',
            title: 'Anuleaza',
          }).hide(),
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
