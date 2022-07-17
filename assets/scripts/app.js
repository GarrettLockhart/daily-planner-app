setInterval(function () {
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 100);

$(document).ready(function () {
  var currentHour = moment().format('ha');
  var now = moment().set('hour', 13).format('LT');
  console.log(currentHour);

  $('.saveBtn').on('click', function (event) {
    var planDesc = $(this).siblings('.textarea-input').val();
    var hourTime = $(this).parents().attr('id');
    localStorage.setItem(hourTime, planDesc);
  });

  function init() {
    $('#9am').find('.textarea-input').val(localStorage.getItem('9am'));
    $('#10am').find('.textarea-input').val(localStorage.getItem('10am'));
    $('#11am').find('.textarea-input').val(localStorage.getItem('11pm'));
    $('#12am').find('.textarea-input').val(localStorage.getItem('12pm'));
    $('#1pm').find('.textarea-input').val(localStorage.getItem('1pm'));
    $('#2pm').find('.textarea-input').val(localStorage.getItem('2pm'));
    $('#3pm').find('.textarea-input').val(localStorage.getItem('3pm'));
    $('#4pm').find('.textarea-input').val(localStorage.getItem('4pm'));
    $('#5pm').find('.textarea-input').val(localStorage.getItem('5pm'));
  }

  function hourColor() {
    $('.time-block').each(function () {
      var timeBlockId = $(this).attr('id');
      console.log(timeBlockId);
      if (timeBlockId === currentHour) {
        $('.textarea-input').addClass('present');
      }
      if (timeBlockId > currentHour) {
        $('.textarea-input').addClass('past');
      }
    });
  }

  hourColor();

  init();
});
