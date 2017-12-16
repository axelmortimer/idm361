var historyTab = 0;
var dailySeconds = 0;
var dailyMinutes = 0;
var dailyHours = 0.0;
var dailySecondsArray = [];
var dailySecondsArrayTemp = [];
var lastDate;
var yesterday;
var incrementDay;
var today = new Date(new Date().setHours(0, 0, 0, 0));
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();


function simplifyDate(longDate) {
  var day = longDate.getDate()
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
// today.setDate(yesterday.getDate() + 3);

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
    console.log('localStorage.dailySecondsArray: ', JSON.parse(localStorage.dailySecondsArray));

    // Compare Dates
    dailySecondsArrayTemp = JSON.parse(localStorage.dailySecondsArray);
    lastDate = new Date(dailySecondsArrayTemp[0][0]);
    if (lastDate !== today) {
      // Find yesterday's date
      yesterday = new Date(new Date().setHours(0, 0, 0, 0));
      yesterday.setDate(yesterday.getDate() - 1);
      console.log('yesterday: ', yesterday);
      incrementDay = new Date(lastDate);
      console.log(incrementDay);

      // If user skipped a day, populate with missing days
      // while (lastDate !== yesterday) {
      //
      //   incrementDay.setDate(incrementDay.getDate() - 1);
      //   dailySecondsArrayTemp.unshift([incrementDay, simplifyDate(incrementDay), 0.0, 0]);
      // }

      // Add new date to front of array
      console.log('New day!');
      dailySecondsArrayTemp.unshift([today, todayDate, 0.0, 0]);
      console.log('dailySecondsArrayTemp: ', dailySecondsArrayTemp);
      localStorage.dailySecondsArray = JSON.stringify(dailySecondsArrayTemp);

    } else {
      console.log('Same day!');
    }
  }

  // Match arrays
  dailySecondsArray = JSON.parse(localStorage.dailySecondsArray);
  console.log('dailySecondsArray: ', dailySecondsArray);

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
