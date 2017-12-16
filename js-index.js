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
    width: 16.25*fontSize,
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
    width: 16.25*fontSize,
    data: [
        {x: "12/4", y: 0},
        {x: "12/11", y: 0},
        {x: "12/18", y: 0},
        {x: "12/25", y: 0},
        {x: "1/2", y: 0},
        {x: "1/9", y: 0},
        {x: "1/16", y: 0}
    ]
});
linechartWeekly.draw();
