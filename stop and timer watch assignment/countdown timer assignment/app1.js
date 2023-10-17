// <!-- Adding JavaScript code -->

// Getting formated date from date string
var deadline = new Date(
    "dec 31, 2023 15:37:25"
).getTime();

// Calling defined function at certain interval
var x = setInterval(function () {

    // Getting current date and time in required format
    var now = new Date().getTime();

    // Calculating difference
    var t = deadline - now;

    // Getting values of days,hours,minutes, seconds
    var days = Math.floor(
        t / (1000 * 60 * 60 * 24)
    );
    var hours = Math.floor(
        (t % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
    );
    var minutes = Math.floor(
        (t % (1000 * 60 * 60)) / (1000 * 60)
    );
    var seconds = Math.floor(
        (t % (1000 * 60)) / 1000
    );

    // Show the output time
    document.getElementById("day")
            .innerHTML = days;
    document.getElementById("hour")
            .innerHTML = hours;
    document.getElementById("minute")
            .innerHTML = minutes;
    document.getElementById("second")
            .innerHTML = seconds;

    // Show overtime output
    if (t < 0) {
        clearInterval(x);
        document.getElementById(
            "demo"
        ).innerHTML = "TIME UP";
        document.getElementById(
            "day"
        ).innerHTML = "0";
        document.getElementById(
            "hour"
        ).innerHTML = "0";
        document.getElementById(
            "minute"
        ).innerHTML = "0";
        document.getElementById(
            "second"
        ).innerHTML = "0";
    }
}, 1000);