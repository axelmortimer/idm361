var historyTab = 0;
var dailySeconds = 0;
var dailyMinutes = 0;
var dailyHours = 0.0;
var dailySecondsArray = [];
var dailySecondsArrayTemp = [];
var yesterday;
var incrementDay;
var decrementDay;
var today = new Date(new Date().setHours(0, 0, 0, 0));
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();


function simplifyDate(longDate) {
  var day = longDate.getDate();
  var month = longDate.getMonth()+1;
  var year = longDate.getFullYear();

  if (day < 10) {
      day = '0' + day;
  }
  if (month < 10) {
      month = '0' + month;
  }
  var shortDate = month + '/' + day;
  return shortDate;
}

var todayDate = simplifyDate(today);

// Test Dates:
// todayDate = '12/18';
// today.setDate(today.getDate() + 3);

// Instantiate/Populate Daily Seconds Array
if (typeof (Storage) !== "undefined") {

  // Reset localStorage.dailySecondsArray for debugging
  // localStorage.removeItem('dailySecondsArray');

  // Sync LocalStorage to JS Variables
  if (!localStorage.dailySecondsArray) {

    // Create Local Storage Daily Array If It Doesn't Exist
    console.log('DailySecondsArray doesn\'t exist, creating new array.');
    localStorage.dailySecondsArray = JSON.stringify([[today, todayDate, 0.0, 0]]);

  } else {

    console.log('DailySecondsArray already exists.');

    // Compare Dates
    dailySecondsArrayTemp = JSON.parse(localStorage.dailySecondsArray);
    dailySecondsArrayTemp[0][0] = new Date(dailySecondsArrayTemp[0][0]);

    // Test Date
    // dailySecondsArrayTemp[0][0].setDate(dailySecondsArrayTemp[0][0].getDate() - 3);

    if (dailySecondsArrayTemp[0][0].getTime() !== today.getTime()) {
      console.log('New day!');
      incrementDay = new Date(dailySecondsArrayTemp[0][0]);

      // Populate with missing days
      while (incrementDay.getTime() !== today.getTime()) {
        incrementDay.setDate(incrementDay.getDate() + 1);
        console.log(incrementDay);
        dailySecondsArrayTemp.unshift([new Date(incrementDay), simplifyDate(incrementDay), 0.0, 0]);
      }

      console.log(dailySecondsArrayTemp);
      localStorage.dailySecondsArray = JSON.stringify(dailySecondsArrayTemp);

    } else {
      console.log('Same day!');
    }
  }

  // Populate with more dates if length isn't 7
  dailySecondsArrayTemp = JSON.parse(localStorage.dailySecondsArray);
  dailySecondsArrayTemp[dailySecondsArrayTemp.length - 1][0] = new Date(dailySecondsArrayTemp[dailySecondsArrayTemp.length - 1][0]);
  while (dailySecondsArrayTemp.length < 7) {
    decrementDay = new Date(dailySecondsArrayTemp[dailySecondsArrayTemp.length - 1][0]);
    decrementDay.setDate(decrementDay.getDate() - 1);
    dailySecondsArrayTemp.push([new Date(decrementDay), simplifyDate(decrementDay), 0.0, 0]);
  }
  localStorage.dailySecondsArray = JSON.stringify(dailySecondsArrayTemp);

  // Match arrays
  dailySecondsArray = JSON.parse(localStorage.dailySecondsArray);
  console.log(dailySecondsArray);

} else {
  // Sorry! No Web Storage support..
  alert('This browser does NOT support local storage');
}

// Change Page
function jmp2LocalPage(whichPage) {
  location.href = whichPage;
}

// Save Seconds
function saveTime() {
  console.log("saveTime called");
  if (typeof (Storage) !== "undefined") {
    dailySecondsArray[0][3] = (dailySecondsArray[0][3] || 0) + overallSeconds;
    dailySecondsArray[0][2] = computeHours(dailySecondsArray[0][3]);
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
