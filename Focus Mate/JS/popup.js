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

const home = document.querySelector("#home");
home.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "../HTML/popup.html";
});


/*  Pomodoro */
const pomodoro = document.querySelector("#pomodoro");
pomodoro.addEventListener("click", function (event) {
  try{
    event.preventDefault();
    window.location.href = "../HTML/pomodoro.html";
  }catch(error){
    console.log('error', error);
  }
	
});











