var historyTab = 0;
var dailySeconds = 0;
var dailyMinutes = 0;
var dailyHours = 0.0;
var dailySecondsArray = [];
var dailySecondsArrayTemp = [];
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10){
    dd='0'+dd;
}
if(mm<10){
    mm='0'+mm;
}
var todayDate = mm+'/'+dd;
// Test Dates:
// todayDate = '12/16';

// Instantiate/Populate Daily Seconds Array
if (typeof (Storage) !== "undefined") {

  // Reset localStorage.dailySecondsArray for debugging
  // localStorage.removeItem('dailySecondsArray');

  // Sync LocalStorage to JS Variables
  if (localStorage.dailySecondsArray) {
    console.log('DailySecondsArray already exists.');
    console.log('localStorage.dailySecondsArray: ', JSON.parse(localStorage.dailySecondsArray));

    // Compare Dates
    dailySecondsArrayTemp = JSON.parse(localStorage.dailySecondsArray);
    if (dailySecondsArrayTemp[0][0] !== todayDate) {
      // Add date to beginning of array
      console.log('New day!');
      dailySecondsArrayTemp.unshift([todayDate, 0, 0]);
      console.log('dailySecondsArrayTemp: ', dailySecondsArrayTemp);
      localStorage.dailySecondsArray = JSON.stringify(dailySecondsArrayTemp);
    } else {
      console.log('Same day!');
    }

  } else {
    // Create Local Storage Daily Array If It Doesn't Exist
    console.log('DailySecondsArray doesn\'t exist, creating new array.');
    localStorage.dailySecondsArray = JSON.stringify([[todayDate, 0, 0]]);
  }

  // Match arrays
  dailySecondsArray = JSON.parse(localStorage.dailySecondsArray);
  console.log('dailySecondsArray: ', dailySecondsArray);

} else {
  // Sorry! No Web Storage support..
  alert('This browser does NOT support local storage');
}

// Edit Total Hours
document.getElementById('totalHours').innerHTML = JSON.stringify(dailySecondsArray[0][1]);

// Change Page
function jmp2LocalPage(whichPage) {
  location.href = whichPage;
}

// Save Seconds
function saveTime() {
  console.log("saveTime called");
  if (typeof (Storage) !== "undefined") {
    dailySecondsArray[0][2] = (dailySecondsArray[0][2] || 0) + overallSeconds;
    dailySecondsArray[0][1] = computeHours(dailySecondsArray[0][2]);
    localStorage.dailySecondsArray = JSON.stringify(dailySecondsArray);
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
  console.log('Updated localStorage.dailySecondsArray: ', localStorage.dailySecondsArray);
  jmp2LocalPage('index.html');
}

function computeHours(seconds) {
  dailyMinutes = seconds / 60;
  dailyHours = dailyMinutes / 60;
  dailyHours = Math.round(dailyHours * 10) / 10;
  console.log('dailyMinutes: ', dailyMinutes);
  console.log('dailyHours: ', dailyHours);
  return dailyHours;
}


// jQuery
$(document).ready(function() {
    //Switch between
    $('.historyNavDaily').bind('touchstart click', function() {
      $('.dailyEntryContainer').css('display', 'inline');
      $('.weeklyEntryContainer').css('display', 'none');
    });
    $('.historyNavWeekly').bind('touchstart click', function() {
      $('.dailyEntryContainer').css('display', 'none');
      $('.weeklyEntryContainer').css('display', 'inline');
    });
    $('.historyDelete').bind('touchstart click', function() {
      $(this).parent().css('display', 'none');
    });
});
