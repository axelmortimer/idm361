var fontSize = window.getComputedStyle(document.body).getPropertyValue('font-size');
fontSize = fontSize.slice(0,2);
var todayDateNumber = 0;

var dailySecondsChart = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];
dailySecondsChart[6][0] = todayDate;
dailySecondsChart[6][1] = dailySecondsArray[0][1];

todayDateNumber = parseInt(dailySecondsChart[6][0].replace('/', ''));
console.log(todayDateNumber);


var linechartDaily = new ThreesyLine({
    element: "#chart-daily",
    height: 6.6875*fontSize,
    width: 16.25*fontSize,
    data: [
        {x: 1, y: 1},
        {x: 1, y: 1},
        {x: 1, y: 1},
        {x: 1, y: 1},
        {x: 1, y: 1},
        {x: 1, y: 1},
        {x: 1, y: 1}
    ]
});
linechartDaily.draw();

var linechartWeekly = new ThreesyLine({
    element: "#chart-weekly",
    height: 6.6875*fontSize,
    width: 16.25*fontSize,
    data: [
        {x: "12/4", y: 1.2},
        {x: "12/11", y: 0},
        {x: "12/18", y: 0},
        {x: "12/25", y: 0},
        {x: "1/2", y: 0},
        {x: "1/9", y: 0},
        {x: "1/16", y: 0}
    ]
});
linechartWeekly.draw();

// var linechartDaily = new ThreesyLine({
//     element: "#chart-daily",
//     height: 6.6875*fontSize,
//     width: 16.25*fontSize,
//     data: [
//         {x: dailySecondsChart[0][0], y: dailySecondsChart[0][1]},
//         {x: dailySecondsChart[1][0], y: dailySecondsChart[1][1]},
//         {x: dailySecondsChart[2][0], y: dailySecondsChart[2][1]},
//         {x: dailySecondsChart[3][0], y: dailySecondsChart[3][1]},
//         {x: dailySecondsChart[4][0], y: dailySecondsChart[4][1]},
//         {x: dailySecondsChart[5][0], y: dailySecondsChart[5][1]},
//         {x: dailySecondsChart[6][0], y: dailySecondsChart[6][1]}
//     ]
// });
