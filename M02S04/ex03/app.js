const controls = document.querySelector('.controls');
const heroElement = document.querySelector('.hero');
const stageElement = document.querySelector('.stage');
const step = 30;
const axis = {
  N: 'y',
  S: 'y',
  W: 'x',
  E: 'x',
  NW: 'x',
  SE: 'x',
  NE: 'x',
  SW: 'x',
};
const direction = {
  N: 'back',
  S: 'fw',
  W: 'back',
  E: 'fw',
  NW: 'back',
  SE: 'fw',
  NE: 'fw',
  SW: 'back',
  ArrowDown: 'fw',
  ArrowUp: 'back',
  ArrowRight: 'fw',
  ArrowLeft: 'back',
};
const secondAxis = {
  NW: 'y',
  SE: 'y',
  NE: 'y',
  SW: 'y',
};

const secondDirection = {
  NW: 'back',
  SE: 'fw',
  NE: 'back',
  SW: 'fw',
};
const arrowMap = {
  ArrowDown: 'y',
  ArrowUp: 'y',
  ArrowRight: 'x',
  ArrowLeft: 'x',
};
const hero = {
  x: 0,
  y: 0,
  width: heroElement.clientWidth,
  height: heroElement.clientHeight,
};
const stageData = {
  width: stageElement.clientWidth,
  height: stageElement.clientHeight,
};

controls.addEventListener('click', function (event) {
  const target = event.target;
  // early return
  if (target.nodeName !== 'BUTTON') {
    return;
  }
  const value = target.className;
  const currentAxis1 = axis[value];
  const currentAxis2 = secondAxis[value];
  const currentDirection1 = direction[value];
  const currentDirection2 = secondDirection[value];

  updateHeroPosition(
    currentAxis1,
    currentDirection1,
    currentAxis2,
    currentDirection2,
  );

  renderHero(hero);
});

document.addEventListener('keydown', (event) => {
  const arrowPressed = event.code;

  if (!arrowPressed.startsWith('Arrow')) {
    return;
  }

  const currentAxis = arrowMap[arrowPressed];
  const currentDirection = direction[arrowPressed];

  updateHeroPosition(currentAxis, currentDirection);

  renderHero(hero);
});

function updateHeroPosition(
  currentAxis1,
  currentDirection1,
  currentAxis2,
  currentDirection2,
) {
  // ternary operator
  hero[currentAxis1] =
    currentDirection1 === 'back'
      ? hero[currentAxis1] - step
      : hero[currentAxis1] + step;

  hero[currentAxis2] =
    currentDirection2 === 'back'
      ? hero[currentAxis2] - step
      : hero[currentAxis2] + step;

  // simplify
  if (hero.x <= 0) {
    hero.x = 0;
  }

  if (hero.y <= 0) {
    hero.y = 0;
  }

  if (hero.x >= stageData.width - hero.width) {
    hero.x = stageData.width - hero.width;
  }

  if (hero.y >= stageData.height - hero.height) {
    hero.y = stageData.height - hero.height;
  }
}

function renderHero(hero) {
  // heroElement.style.left = `${hero.x}px`;
  // heroElement.style.top = `${hero.y}px`;

  const cssText = `transform: translate(${hero.x}px, ${hero.y}px);`;
  heroElement.style.cssText = cssText;
}
