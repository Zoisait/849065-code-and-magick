'use strict';
(function () {

  var setup = document.querySelector('.setup');
  var wizardCoatChoise = setup.querySelector('.wizard-coat');
  var currentCoat = 0;

  var changeWizardCoat = function () {
    currentCoat++;
    if (currentCoat === window.util.WIZARD_COAT_COLORS.length) {
      currentCoat = 0;
    }
    wizardCoatChoise.style.fill = window.util.WIZARD_COAT_COLORS[currentCoat];
    setup.querySelector('input[name=coat-color]').value = window.util.WIZARD_COAT_COLORS[currentCoat];
  };

  wizardCoatChoise.addEventListener('click', function () {
    changeWizardCoat();
  });

  var wizardEyesChoise = setup.querySelector('.wizard-eyes');
  var currentEyes = 0;

  var changeWizardEyes = function () {
    currentEyes++;
    if (currentEyes === window.util.WIZARD_EYES_COLORS.length) {
      currentEyes = 0;
    }
    wizardEyesChoise.style.fill = window.util.WIZARD_EYES_COLORS[currentEyes];
    setup.querySelector('input[name=eyes-color]').value = window.util.WIZARD_EYES_COLORS[currentEyes];
  };

  wizardEyesChoise.addEventListener('click', function () {
    changeWizardEyes();
  });

  var fireballColorChoise = setup.querySelector('.setup-fireball-wrap');
  var currentFireballColor = 0;

  var changeFireballColor = function () {
    currentFireballColor++;
    if (currentFireballColor === window.util.FIREBALL_COLORS.length) {
      currentFireballColor = 0;
    }
    fireballColorChoise.style.backgroundColor = window.util.FIREBALL_COLORS[currentFireballColor];
    setup.querySelector('input[name=fireball-color]').value = window.util.FIREBALL_COLORS[currentFireballColor];
  };

  fireballColorChoise.addEventListener('click', function () {
    changeFireballColor();
  });

})();
