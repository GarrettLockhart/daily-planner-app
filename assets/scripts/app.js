const currentDay = document.querySelector('#currentDay');

var date = moment().format('MMMM Do YYYY, h:mm:ss a');

currentDay.textContent = date;
