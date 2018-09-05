'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CURVES_X = 3;
var CURVES_Y = 2;
var CURVES_HEIGHT = 40;
var CLOUD_COLOUR = 'white';
var CLOUD_SHADOW_COLOUR = 'rgba(0, 0, 0, 0.7)';
var CLOUD_SHADOW_GAP = 10;
var CLOUD_HEADER_TOP_MARGIN = 35;
var CLOUD_TEXT_GAP = 15;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var BAR_GAP = 50;
var BAR_BOTTOM_MARGIN = 40;
var BAR_TOP_MARGIN = 5;
var BAR_TEXT_BOTTOM_MARGIN = 25;

var renderCloud = function (ctx) {
  ctx.fillStyle = CLOUD_COLOUR;
  ctx.beginPath();
  ctx.moveTo(CLOUD_X, CLOUD_Y);
  for (var i = 1; i <= CURVES_X; i++) {
    ctx.quadraticCurveTo(CLOUD_X + CLOUD_WIDTH / CURVES_X * (2 * i - 1) / 2, CLOUD_Y + CURVES_HEIGHT, CLOUD_X + CLOUD_WIDTH / CURVES_X * i, CLOUD_Y);
  }
  for (i = 1; i <= CURVES_Y; i++) {
    ctx.quadraticCurveTo(CLOUD_X + CLOUD_WIDTH - CURVES_HEIGHT, CLOUD_Y + CLOUD_HEIGHT / CURVES_Y * (2 * i - 1) / 2, CLOUD_X + CLOUD_WIDTH, CLOUD_Y + CLOUD_HEIGHT / CURVES_Y * i);
  }
  for (i = CURVES_X; i >= 1; i--) {
    ctx.quadraticCurveTo(CLOUD_X + CLOUD_WIDTH / CURVES_X * (2 * i - 1) / 2, CLOUD_Y + CLOUD_HEIGHT - CURVES_HEIGHT, CLOUD_X + CLOUD_WIDTH / CURVES_X * (i - 1), CLOUD_Y + CLOUD_HEIGHT);
  }
  for (i = CURVES_Y; i >= 1; i--) {
    ctx.quadraticCurveTo(CLOUD_X + CURVES_HEIGHT, CLOUD_Y + CLOUD_HEIGHT / CURVES_Y * (2 * i - 1) / 2, CLOUD_X, CLOUD_Y + CLOUD_HEIGHT / CURVES_Y * (i - 1));
  }
  ctx.closePath();
  ctx.shadowColor = CLOUD_SHADOW_COLOUR;
  ctx.shadowOffsetX = CLOUD_SHADOW_GAP;
  ctx.shadowOffsetY = CLOUD_SHADOW_GAP;
  ctx.fill();
  ctx.fillStyle = 'black';
  ctx.shadowColor = 'rgba(0, 0, 0, 0)';
  ctx.font = '16px PT Mono';
  ctx.textAlign = 'center';
  ctx.fillText('Ура вы победили!', CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + CLOUD_HEADER_TOP_MARGIN);
  ctx.fillText('Список результатов:', CLOUD_X + CLOUD_WIDTH / 2, CLOUD_Y + CLOUD_HEADER_TOP_MARGIN + CLOUD_TEXT_GAP);
};

var getMaxElement = function (results) {
  var maxElement = results[0];
  for (var i = 0; i < results.length; i++) {
    if (results[i] > maxElement) {
      maxElement = results[i];
    }
  }
  return maxElement;
};

var getRandomColor = function () {
  var barColor = 'hsl(240,' + Math.round(Math.random() * 100) + '%,50%)';
  return barColor;
};

var renderBar = function (ctx, results, counter) {
  var maxTime = getMaxElement(results);
  var barHeight = BAR_MAX_HEIGHT * (results[counter] / maxTime);
  ctx.fillRect(CLOUD_X + BAR_GAP * (counter + 1) + BAR_WIDTH * counter, CLOUD_Y + CLOUD_HEIGHT - BAR_BOTTOM_MARGIN - barHeight, BAR_WIDTH, barHeight);

};

var renderBarText = function (ctx, players, results, counter, textColor) {
  ctx.fillStyle = textColor;
  var maxTime = getMaxElement(results);
  var barHeight = BAR_MAX_HEIGHT * (results[counter] / maxTime);
  ctx.fillText(players[counter], CLOUD_X + BAR_GAP * (counter + 1) + BAR_WIDTH * (counter + 0.5), CLOUD_Y + CLOUD_HEIGHT - BAR_TEXT_BOTTOM_MARGIN);
  ctx.fillText(Math.round(results[counter]), CLOUD_X + BAR_GAP * (counter + 1) + BAR_WIDTH * (counter + 0.5), CLOUD_Y + CLOUD_HEIGHT - BAR_BOTTOM_MARGIN - barHeight - BAR_TOP_MARGIN);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = getRandomColor();
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    }
    renderBar(ctx, times, i);
    renderBarText(ctx, names, times, i, 'black');
  }
};
