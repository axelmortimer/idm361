var historyTab = 0;

var dailySeconds = 0;

function jmp2LocalPage(whichPage) {
  location.href = whichPage;
}

function readData() {
  console.log("readData called");
  if (typeof (Storage) !== "undefined") {
    dailySeconds = (parseInt(localStorage.dailySeconds) || 0);
    console.log(dailySeconds);
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
}

readData();

function saveTime() {
  console.log("writeData called");
  if (typeof (Storage) !== "undefined") {
    localStorage.dailySeconds = (parseInt(localStorage.dailySeconds) || 0) + overallSeconds;
  } else {
    // Sorry! No Web Storage support..
    alert('This browser does NOT support local storage');
  }
  console.log(localStorage.dailySeconds);
  jmp2LocalPage('index.html');
}

function computeTime(seconds) {
  
}

// jquery

$(document).ready(function() {
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
