const circularProgressBar = document.querySelector('#circularProgressBar');
const circularProgressBarNumber = document.querySelector('#circularProgressBar .progress-value');
const buttonTypePomodoro = document.querySelector('#buttonTypePomodoro');
const buttonTypeShortBreak = document.querySelector('#buttonTypeShortBreak');

const audio = new Audio('../assets/audio/alarm.mp3');

const pomodoroTimerInSeconds = 1500; // 60 seconds * 25 minutes
const shortBreakTimerInSeconds = 300; // 60 seconds * 5 minutes
const TIMER_TYPE_POMODORO = 'POMODORO';
const TIMER_TYPE_SHORT_BREAK = 'SHORTBREAK';

let progressInterval;
let pomodoroType = TIMER_TYPE_POMODORO;
let timerValue = pomodoroTimerInSeconds;
let multiplierFactor = 360 / timerValue;

function formatNumberInStringMinutes(number){
    const minutes = Math.trunc(number / 60).toString().padStart(2, '0');
    const seconds = Math.trunc(number % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}


/* start timer */
document.getElementById("start-btn").addEventListener("click", function(){
    startTimer();
});

const startTimer = () =>{
    console.log("start");
    progressInterval = setInterval(()=>{
        timerValue--;
        setInfoCircularProgressBar();
    }, 1000);
}

document.getElementById("stop-btn").addEventListener("click", function(){
    stopTimer();
});
const stopTimer = () => clearInterval(progressInterval);

document.getElementById("reset-btn").addEventListener("click", function(){
    resetTimer();
});
const resetTimer = () => {
    clearInterval(progressInterval);
    timerValue = (pomodoroType === TIMER_TYPE_POMODORO) ? pomodoroTimerInSeconds : shortBreakTimerInSeconds;
    
    multiplierFactor = 360 / timerValue;
    setInfoCircularProgressBar();
    audio.stop();
}

function setInfoCircularProgressBar(){
    if(timerValue === 0){
        stopTimer();
        audio.play();
    }
    
    circularProgressBarNumber.textContent = `${formatNumberInStringMinutes(timerValue)}`;

    circularProgressBar.style.background = `conic-gradient( ${timerValue * multiplierFactor } 360deg, purple 0deg)`;
}

document.getElementById("buttonTypePomodoro").addEventListener("click", function(){
    setPomodoroType(TIMER_TYPE_POMODORO);
});

document.getElementById("buttonTypeShortBreak").addEventListener("click", function(){
    setPomodoroType(TIMER_TYPE_SHORT_BREAK);
});

const setPomodoroType = (type) => {
    pomodoroType = type;
    if(type === TIMER_TYPE_POMODORO){
       buttonTypeShortBreak.classList.remove("active"); 
       buttonTypePomodoro.classList.add("active"); 
    }else{
        buttonTypePomodoro.classList.remove("active");
        buttonTypeShortBreak.classList.add("active");
    }
    resetTimer();
}
 
