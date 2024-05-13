// Function to send message to background script
function sendMessageToBackground(command) {
    chrome.runtime.sendMessage({ command });
}

// Event listeners for button clicks to start, stop, reset timers, and set pomodoro type
document.getElementById("start-btn").addEventListener("click", () => sendMessageToBackground("start"));
document.getElementById("stop-btn").addEventListener("click", () => sendMessageToBackground("stop"));
document.getElementById("reset-btn").addEventListener("click", () => sendMessageToBackground("reset"));
document.getElementById("buttonTypePomodoro").addEventListener("click", () => sendMessageToBackground("pomodoro"));
document.getElementById("buttonTypeShortBreak").addEventListener("click", () => sendMessageToBackground("shortbreak"));
