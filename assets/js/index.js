// jQuery mouse events

$(document).ready(() => {
  $('#animated').click(() => {
    $('#animated').css('background', 'red');
    $('#animated').css('transition', 'all 0.5s');
  });
  $('#animated').dblclick(() => {
    $('#animated').css('background', 'blue');
    $('#animated').css('transition', 'all 0.5s');
  });
  $('#animated').contextmenu(() => {
    $('#animated').css('background', 'teal');
    $('#animated').css('transition', 'all 0.5s');
  });
  $('#animated').mouseenter(() => {
    $('#animated').css('background', 'aqua');
    $('#animated').css('transition', 'all 0.5s');
  });
  $('#animated').mouseleave(() => {
    $('#animated').css('background', 'aliceblue');
    $('#animated').css('transition', 'all 0.5s');
  });
});
