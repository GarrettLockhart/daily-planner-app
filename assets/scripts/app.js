const currentDay = $('#currentDay');
// textarea selectors
const textAreaAll = $('.textarea-input');
const textAreaNine = $('#9am');
const textAreaTen = $('#10am');
const textAreaEleven = $('#11am');
const textAreaTwelve = $('#12pm');
const textAreaOne = $('#1pm');
const textAreaTwo = $('#2pm');
const textAreaThree = $('#3pm');
const textAreaFour = $('#4pm');
const textAreaFive = $('#5pm');
// Save button
const saveBtn = $('.saveBtn');

var date = moment().format('MMMM Do YYYY, h:mm:ss a');
currentDay.text(date);

$(saveBtn).click(function () {
  var plannerInputs = {
    9: textAreaNine.val(),
    10: textAreaTen.val(),
    11: textAreaEleven.val(),
    12: textAreaTwelve.val(),
    1: textAreaOne.val(),
    2: textAreaTwo.val(),
    3: textAreaThree.val(),
    4: textAreaFour.val(),
    5: textAreaFive.val(),
  };

  console.log(plannerInputs);
  localStorage.setItem('plannerInputs', JSON.stringify(plannerInputs));
});

var savedPlans = JSON.parse(localStorage.getItem('plannerInputs'));
console.log(savedPlans);
// textAreaAll.text(savedPlans);

// var storageDefault = function () {};

// storageDefault();
