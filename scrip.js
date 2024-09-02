let timer = document.getElementById("timer");

let totalTime = 1500; 
let timerOn = false;
timer.innerText = formatTime(totalTime);
let btn;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return` ${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

function timerHandler(button) {
    btn = button
    timerOn = !timerOn;
    button.innerText = timerOn ? "Stop" : "Start";
}

function resetHandler() {
    totalTime = 600;
    timer.innerText = formatTime(totalTime);
    timerOn = false;
    btn.innerText = "Start";
}
let count = 1;

function audioPlayer() {
    const audioId = setInterval(() => {
        audio.play();
        count++;
        if (count == 10) {
            clearInterval(audioId);
            count = 0;
        }
    }, 1000)
}



const id = setInterval(() => {
    if (timerOn) {
        totalTime--;
        timer.innerText = formatTime(totalTime);
        if (totalTime === 0) {
            totalTime = 600;
            timer.innerText = formatTime(totalTime);
            timerOn = false;
            btn.innerText = "Start";
            audioPlayer();
        }
    }
}, 1000);