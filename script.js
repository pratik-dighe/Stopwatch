// Select DOM elements
const timeDisplay = document.getElementById("timeDisplay");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = null;

// Format time as HH:MM:SS
function formatTime() {
    const h = hours.toString().padStart(2, "0");
    const m = minutes.toString().padStart(2, "0");
    const s = seconds.toString().padStart(2, "0");
    return `${h}:${m}:${s}`;
}

// Update time display
function updateDisplay() {
    timeDisplay.textContent = formatTime();
}

// Start the stopwatch
function startTimer() {
    if (timer) return; // Prevent multiple intervals
    timer = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

// Stop the stopwatch
function stopTimer() {
    clearInterval(timer);
    timer = null;
}

// Reset the stopwatch
function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

// Event listeners
startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
