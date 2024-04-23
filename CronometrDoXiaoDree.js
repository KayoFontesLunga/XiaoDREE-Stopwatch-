document.addEventListener('DOMContentLoaded', function () {
    let startTime = null;
    let stopwatch;

    function TimeFormat(timeDiff) {
        const totalSeconds = Math.floor(timeDiff / 1000);
        const hour = Math.floor(totalSeconds / 3600);
        const minute = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        let hourFormat, minuteFormat, secondsFormat;

        if (hour < 10) {
            hourFormat = '0' + hour;
        } else {
            hourFormat = String(hour);
        }

        if (minute < 10) {
            minuteFormat = '0' + minute;
        } else {
            minuteFormat = String(minute);
        }

        if (seconds < 10) {
            secondsFormat = '0' + seconds;
        } else {
            secondsFormat = String(seconds);
        }

        return hourFormat + ':' + minuteFormat + ':' + secondsFormat;
    }
    function stopwatchATT() {
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - startTime;
        document.getElementById('CronometroDoXiaoDREE').textContent = TimeFormat(timeDiff);
    }

    document.getElementById('btnStart').addEventListener('click', function () {
        if (startTime === null) {
            startTime = new Date().getTime();
            stopwatch = setInterval(stopwatchATT, 1000);
        }
    });

    document.getElementById('btnStop').addEventListener('click', function () {
        clearInterval(stopwatch);
        startTime = null;
    });

    document.getElementById('btnReset').addEventListener('click', function () {
        clearInterval(stopwatch);
        startTime = null;
        document.getElementById('CronometroDoXiaoDREE').textContent = '00:00:00';
    });
});
