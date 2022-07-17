setInterval(function () {
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 500);

$(document).ready(function () {
  var currentHour = parseInt(moment().format('H'));

  $('.saveBtn').on('click', function () {
    var planDesc = $(this).siblings('.textarea-input').val();
    var hourTime = $(this).parents().attr('id');
    localStorage.setItem(hourTime, planDesc);
  });

  function init() {
    $('#hour-9').find('.textarea-input').val(localStorage.getItem('hour-9'));
    $('#hour-10').find('.textarea-input').val(localStorage.getItem('hour-10'));
    $('#hour-11').find('.textarea-input').val(localStorage.getItem('hour-11'));
    $('#hour-12').find('.textarea-input').val(localStorage.getItem('hour-12'));
    $('#hour-13').find('.textarea-input').val(localStorage.getItem('hour-13'));
    $('#hour-14').find('.textarea-input').val(localStorage.getItem('hour-14'));
    $('#hour-15').find('.textarea-input').val(localStorage.getItem('hour-15'));
    $('#hour-16').find('.textarea-input').val(localStorage.getItem('hour-16'));
    $('#hour-17').find('.textarea-input').val(localStorage.getItem('hour-17'));
  }

  function hourColor() {
    $('.time-block').each(function () {
      var timeBlockId = parseInt($(this).attr('id').split('-')[1]);
      if (timeBlockId === currentHour) {
        $(this).addClass('present');
      } else if (timeBlockId < currentHour) {
        $(this).removeClass('present');
        $(this).addClass('past');
      } else if (timeBlockId > currentHour) {
        $(this).removeClass('present');
        $(this).addClass('future');
      }
    });
  }

  hourColor();
  init();
});
