// Edit Total Hours
if (JSON.parse(dailySecondsArray[0][2]) !== 0) {
  document.getElementById('totalHours').innerHTML = JSON.parse(dailySecondsArray[0][2]);
} else {
  document.getElementById('totalHours').innerHTML = '0.0';
}

// Convert pixel to REMs for chart width/height
var fontSize = window.getComputedStyle(document.body).getPropertyValue('font-size');
fontSize = fontSize.slice(0,2);

var linechartDaily = new ThreesyLine({
    element: "#chart-daily",
    height: 6.6875*fontSize,
    width: 15.75*fontSize,
    data: [
        {x: dailySecondsArray[6][1], y: dailySecondsArray[6][2]},
        {x: dailySecondsArray[5][1], y: dailySecondsArray[5][2]},
        {x: dailySecondsArray[4][1], y: dailySecondsArray[4][2]},
        {x: dailySecondsArray[3][1], y: dailySecondsArray[3][2]},
        {x: dailySecondsArray[2][1], y: dailySecondsArray[2][2]},
        {x: dailySecondsArray[1][1], y: dailySecondsArray[1][2]},
        {x: dailySecondsArray[0][1], y: dailySecondsArray[0][2]}
    ]
});
linechartDaily.draw();



var linechartWeekly = new ThreesyLine({
    element: "#chart-weekly",
    height: 6.6875*fontSize,
    width: 15.75*fontSize,
    data: [
        {x: weeklySecondsArray[6][1], y: weeklySecondsArray[6][2]},
        {x: weeklySecondsArray[5][1], y: weeklySecondsArray[5][2]},
        {x: weeklySecondsArray[4][1], y: weeklySecondsArray[4][2]},
        {x: weeklySecondsArray[3][1], y: weeklySecondsArray[3][2]},
        {x: weeklySecondsArray[2][1], y: weeklySecondsArray[2][2]},
        {x: weeklySecondsArray[1][1], y: weeklySecondsArray[1][2]},
        {x: weeklySecondsArray[0][1], y: weeklySecondsArray[0][2]}
    ]
});
linechartWeekly.draw();
