setInterval(function () {
  $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}, 100);

$(document).ready(function () {
  var hour = moment().format('h');

  $('.saveBtn').on('click', function (event) {
    var planDesc = $(this).siblings('.textarea-input').val();
    var hourTime = $(this).parents().attr('id');
    localStorage.setItem(hourTime, planDesc);
  });

  var IDs = $('#time-block-container span[id]')
    .map(function () {
      return this.id;
    })
    .get();

  console.table(IDs);
});
