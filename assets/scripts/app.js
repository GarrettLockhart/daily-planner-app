$(document).ready(function () {
  const currentDay = $('#currentDay');
  const textAreaInput = document.querySelector('.textarea-input');

  init();

  var date = moment().format('MMMM Do YYYY, h:mm:ss a');
  var hour = moment().format('h');
  currentDay.text(date);

  var plannerDetailsFinal = [];

  $('.saveBtn').click(function (event) {
    event.preventDefault();

    var planDesc = $(event.target).siblings('.textarea-input').val();
    var hourTime = $(event.target).parents().attr('id');

    var plannerDetails = {
      savedPlan: planDesc,
      timeSlot: hourTime,
    };

    plannerDetailsFinal.push(plannerDetails);

    localStorage.setItem('plannerDetails', JSON.stringify(plannerDetailsFinal));
  });

  // $('.saveBtn').click(function (event) {
  //   event.preventDefault();

  //   var planDesc = $(event.target).siblings('.textarea-input').val();
  //   var hourTime = $(event.target).parents().attr('id');
  //   localStorage.setItem('plannerDetails', hourTime, planDesc);
  // });

  function init() {
    if (localStorage.getItem('plannerDetails') === null) {
      console.log('working');
    }
  }
});
