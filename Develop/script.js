// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//unsure whether or not to create the querySelectors inside or outside 
//the wrapped jQuery call

var saveButton = document.querySelector(".saveBtn");

//current day formated
var currentDay = dayjs().format('MMM D, YYYY, hh:mm:ss a');
var currentHour = dayjs().hour();
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveButton.addEventListener("click", function(event) {
    event.preventDefault();


  });
  
  //TODO: Add a function which saves all events to storage

  //TODO: Add a function which reads all events from storage and displays them
  //onto the page. Should create a div element following the guidelines of the HTML 
  //with an hourly block for each standard business hour


  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  function applyTense(){

  }


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  function showDate(){
    $('#currentDay').text(currentDay)
  } 
  //call applyTense
  applyTense();
  //call showDate
  showDate();
});


