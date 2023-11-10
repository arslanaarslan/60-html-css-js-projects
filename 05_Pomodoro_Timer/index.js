const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;
let timerStarted;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerEl.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
    if(!timerStarted) {
        interval = setInterval(() => {
            timeLeft--;
            updateTimer();
            if(timeLeft === 0) {
                alert("Time's up!");
                clearInterval(interval);
                timeLeft = 1500;
                updateTimer()
            }
        }, 1000);
        timerStarted = true;
    }
}

function stopTimer() {
    clearInterval(interval);
    timerStarted = false;
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);
