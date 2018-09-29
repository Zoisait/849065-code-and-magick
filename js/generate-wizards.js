'use strict';
(function () {

  var generateWizard = function (names, surnames, coats, eyes) {
    var wizardName = names[window.getRandomInt(names.length - 1)] + ' ' + surnames[window.getRandomInt(surnames.length - 1)];
    var wizardCoat = coats[window.getRandomInt(coats.length - 1)];
    var wizardEyes = eyes[window.getRandomInt(eyes.length - 1)];
    var wizard = {name: wizardName, coatColor: wizardCoat, eyesColor: wizardEyes};
    return wizard;
  };

  var generateRandomWizards = function (quantity) {
    var wizards = [];
    for (var i = 1; i <= quantity; i++) {
      var wizard = generateWizard(window.util.WIZARD_NAMES, window.util.WIZARD_SURNAMES, window.util.WIZARD_COAT_COLORS, window.util.WIZARD_EYES_COLORS);
      wizards.push(wizard);
    }
    return wizards;
  };

  var wizards = generateRandomWizards(window.util.WIZARDS_NUMBER);
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
    createWizardsList(window.util.WIZARDS_NUMBER);
    similarListElement.appendChild(wizardsList);
  };

  renderWizards();

})();
