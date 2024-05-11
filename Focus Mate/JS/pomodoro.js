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

const startTimer = () =>{
    console.log("startt");
    progressInterval = setInterval(()=>{
        timerValue--;
        setInfoCircularProgressBar();
    }, 1000);
}

const stopTimer = () => clearInterval(progressInterval);

function setInfoCircularProgressBar(){
    if(timerValue === 0){
        stopTimer();
        audio.play();
    }

    circularProgressBarNumber.textContent = `${formatNumberInStringMinutes(timerValue)}`;

    //circularProgressBar.style.background = `conic-gradient( ${timerValue = multiplierFactor } 360deg, purple 0deg)`
}