const getquotes = async () => {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    const myquote = document.querySelector("#myquote");
    myquote.innerHTML = data.content;
  } catch (error) {
    console.log("error", error);
  }
};

window.addEventListener("load", () => {
  getquotes();
});

document.addEventListener("DOMContentLoaded", function () {
  const websiteBlocking = document.getElementById("websiteBlocking");
  websiteBlocking.addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "website_blocking.html";
  });
});

const home = document.getElementById("home");
home.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "popup.html";
});


/*  Pomodoro */
const pomodoro = document.getElementById("pomodoro");
pomodoro.addEventListener("click", function (event) {
	event.preventDefault();
	window.location.href = "pomodoro.html";
});

const circularProgressBar = document.querySelector('#circularProgressBar');
const circularProgressBarNumber = document.querySelector('#circularProgressBar .progress-value')










