'use strict';

var WIZARDS_NUMBER = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var getRandomInt = function (max, min) {
  if (!min) {
    min = 0;
  }
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var generateWizard = function (names, surnames, coats, eyes) {
  var wizardName = names[getRandomInt(names.length - 1)] + ' ' + surnames[getRandomInt(surnames.length - 1)];
  var wizardCoat = coats[getRandomInt(coats.length - 1)];
  var wizardEyes = eyes[getRandomInt(eyes.length - 1)];
  var wizard = {name: wizardName, coatColor: wizardCoat, eyesColor: wizardEyes};
  return wizard;
};

var generateRandomWizards = function (quantity) {
  var wizards = [];
  for (var i = 1; i <= quantity; i++) {
    var wizard = generateWizard(WIZARD_NAMES, WIZARD_SURNAMES, WIZARD_COAT_COLORS, WIZARD_EYES_COLORS);
    wizards.push(wizard);
  }
  return wizards;
};

var wizards = generateRandomWizards(WIZARDS_NUMBER);
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardsList = document.createDocumentFragment();

var createWizard = function (i) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  wizardsList.appendChild(wizardElement);
};

var createWizardsList = function (quantity) {
  for (var i = 0; i < quantity; i++) {
    createWizard(i);
  }
  return wizardsList;
};

var renderWizards = function () {
  createWizardsList(WIZARDS_NUMBER);
  similarListElement.appendChild(wizardsList);
};

renderWizards();

var setup = document.querySelector('.setup');
setup.querySelector('.setup-similar').classList.remove('hidden');

var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var setupCloseHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', setupCloseHandler);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', setupCloseHandler);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('focus', function () {
  document.removeEventListener('keydown', setupCloseHandler);
});

userNameInput.addEventListener('blur', function () {
  document.addEventListener('keydown', setupCloseHandler);
});

userNameInput.addEventListener('invalid', function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

var wizardCoatChoise = setup.querySelector('.wizard-coat');
var currentCoat = 0;

var changeWizardCoat = function () {
  currentCoat++;
  if (currentCoat === WIZARD_COAT_COLORS.length) {
    currentCoat = 0;
  }
  wizardCoatChoise.style.fill = WIZARD_COAT_COLORS[currentCoat];
  setup.querySelector('input[name=coat-color]').value = WIZARD_COAT_COLORS[currentCoat];
};

wizardCoatChoise.addEventListener('click', function () {
  changeWizardCoat();
});

var wizardEyesChoise = setup.querySelector('.wizard-eyes');
var currentEyes = 0;

var changeWizardEyes = function () {
  currentEyes++;
  if (currentEyes === WIZARD_EYES_COLORS.length) {
    currentEyes = 0;
  }
  wizardEyesChoise.style.fill = WIZARD_EYES_COLORS[currentEyes];
  setup.querySelector('input[name=eyes-color]').value = WIZARD_EYES_COLORS[currentEyes];
};

wizardEyesChoise.addEventListener('click', function () {
  changeWizardEyes();
});

var fireballColorChoise = setup.querySelector('.setup-fireball-wrap');
var currentFireballColor = 0;

var changeFireballColor = function () {
  currentFireballColor++;
  if (currentFireballColor === FIREBALL_COLORS.length) {
    currentFireballColor = 0;
  }
  fireballColorChoise.style.backgroundColor = FIREBALL_COLORS[currentFireballColor];
  setup.querySelector('input[name=fireball-color]').value = FIREBALL_COLORS[currentFireballColor];
};

fireballColorChoise.addEventListener('click', function () {
  changeFireballColor();
});
