//Timer
var time = document.getElementById('timer'),
    seconds = 0, minutes = 0, hours = 0, overallSeconds = 0,
    t;

function timer() {
    t = setTimeout(add, 1000);
}

function add() {
    overallSeconds++;
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    time.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

timer();
