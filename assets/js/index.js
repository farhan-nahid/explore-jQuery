/* 

        1.  jQuery mouse events
        2.  jQuery keyboard events
        3.  jQuery keyboard events
        4.  jQuery keyboard events
        5.  jQuery keyboard events
        6.  jQuery keyboard events
        7.  jQuery keyboard events
        8.  jQuery keyboard events
        9.  jQuery keyboard events
        10.  jQuery keyboard events


*/

$(document).ready(() => {
  // jQuery mouse events

  $('#animated').click(() => {
    $(this).css('background', 'red');
    $(this).css('transition', 'all 0.7s');
  });

  $('#animated').dblclick(() => {
    $(this).css('background', 'blue');
    $(this).css('transition', 'all 0.7s');
  });

  $('#animated').contextmenu(() => {
    $(this).css('background', 'teal');
    $(this).css('transition', 'all 0.7s');
  });

  $('#animated').mouseenter(() => {
    $(this).css('background', 'aqua');
    $(this).css('transition', 'all 0.7s');
  });

  $('#animated').mouseleave(() => {
    $(this).css('background', 'aliceblue');
    $(this).css('transition', 'all 0.7s');
  });

  // jQuery keyboard events

  $('body').keypress(() => {
    $('body h1').css('color', 'red');
    $('body h1').css('transition', 'all 0.3s');
  });

  $('body').keydown(() => {
    $('body h1').css('color', 'red');
    $('body h1').css('transition', 'all 0.3s');
  });

  $('body').keyup(() => {
    $('body h1').css('color', 'black');
    $('body h1').css('transition', 'all 0.3s');
  });
});
