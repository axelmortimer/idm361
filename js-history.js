// Populate Daily History
var dailyEntryContainer = document.getElementById('dailyEntryContainer');
for (var i = 0; i < dailySecondsArray.length; i++) {
  dailyEntryContainer.innerHTML += '<div class="tableEntry"><h4>' + dailySecondsArray[i][1] + '</h4><h4>' + dailySecondsArray[i][2] + 'hours</h4></div>';
}

// Populate Weekly History
var weeklyEntryContainer = document.getElementById('weeklyEntryContainer');
for (var i = 0; i < weeklySecondsArray.length; i++) {
  weeklyEntryContainer.innerHTML += '<div class="tableEntry"><h4>' + weeklySecondsArray[i][1] + '</h4><h4>' + weeklySecondsArray[i][2] + 'hours</h4></div>';
}
