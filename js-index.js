var dailySeconds = 0;

var fontSize = window.getComputedStyle(document.body).getPropertyValue('font-size');
fontSize = fontSize.slice(0,2);

var linechartDaily = new ThreesyLine({
    element: "#chart-daily",
    height: 6.6875*fontSize,
    width: 16.25*fontSize,
    data: [
        {x: "Mon", y: 1.2},
        {x: "Tue", y: 0},
        {x: "Wed", y: 0},
        {x: "Thu", y: 0},
        {x: "Fri", y: 0},
        {x: "Sat", y: 0},
        {x: "Sun", y: 0}
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
