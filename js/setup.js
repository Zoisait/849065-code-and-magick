'use strict';

var COMPETITORNUMBER = 4;
var COMPETITORNAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var COMPETITORSURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COMPETITORCOATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var COMPETITOREYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var competitors = [];
var generateRandomCompetitors = function (quantity, names, surnames, coats, eyes) {
  for (var i = 1; i <= quantity; i++) {
    var wizardName = names[Math.round(Math.random() * (names.length - 1))] + ' ' + surnames[Math.round(Math.random() * (surnames.length - 1))];
    var wizardCoat = coats[Math.round(Math.random() * (coats.length - 1))];
    var wizardEyes = eyes[Math.round(Math.random() * (eyes.length - 1))];
    var wizard = {name: wizardName, coatColor: wizardCoat, eyesColor: wizardEyes};
    competitors.push(wizard);
  }
  return competitors;
};

generateRandomCompetitors(COMPETITORNUMBER, COMPETITORNAMES, COMPETITORSURNAMES, COMPETITORCOATCOLORS, COMPETITOREYESCOLORS);

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var competitorsList = document.createDocumentFragment();

var createCompetitorsList = function (wizards) {
  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = competitors[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = competitors[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = competitors[i].eyesColor;
    similarListElement.appendChild(wizardElement);
  }
  return competitorsList;
};

var renderCompetitors = function () {
  createCompetitorsList(competitors);
  similarListElement.appendChild(competitorsList);
};

renderCompetitors();

userDialog.querySelector('.setup-similar').classList.remove('hidden');
