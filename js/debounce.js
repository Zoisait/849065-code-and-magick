'use strict';
(function () {
  var DEBOUNCE_INTERVAL = 500; // ms
  var lastTimeout;
  window.debounce = function (array) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      window.updateWizards(array, window.util.WIZARDS_NUMBER);
    }, DEBOUNCE_INTERVAL);
  };
})();
