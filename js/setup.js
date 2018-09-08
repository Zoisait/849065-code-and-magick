'use strict';

var COMPETITORNUMBER = 4;
var COMPETITORNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var COMPETITORSURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COMPETITORCOATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COMPETITOREYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomInt = function (max, min) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
};

var generateWizard = function (names, surnames, coats, eyes) {
  var wizardName = names[getRandomInt(names.length - 1, 0)] + ' ' + surnames[getRandomInt(surnames.length - 1, 0)];
  var wizardCoat = coats[Math.round(Math.random() * (coats.length - 1))];
  var wizardEyes = eyes[Math.round(Math.random() * (eyes.length - 1))];
  var wizard = {name: wizardName, coatColor: wizardCoat, eyesColor: wizardEyes};
  return wizard;
};

var generateRandomCompetitors = function (quantity) {
  var competitors = [];
  for (var i = 1; i <= quantity; i++) {
    var wizard = generateWizard(COMPETITORNAMES, COMPETITORSURNAMES, COMPETITORCOATCOLORS, COMPETITOREYESCOLORS);
    competitors.push(wizard);
  }
  return competitors;
};

var competitors = generateRandomCompetitors(COMPETITORNUMBER);
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardsList = document.createDocumentFragment();

var createWizard = function (i) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = competitors[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = competitors[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = competitors[i].eyesColor;
  similarListElement.appendChild(wizardElement);
};

var createWizardsList = function (wizards) {
  for (var i = 0; i < wizards.length; i++) {
    createWizard(i);
  }
  return wizardsList;
};

var renderWizards = function () {
  createWizardsList(competitors);
  similarListElement.appendChild(wizardsList);
};

renderWizards();

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');
