const getquotes = async () => {
    try{
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


document.getElementById("start-session-btn").addEventListener("click", function(){
    showLoader(); // show the loader when the button is clicked
    showOverlay();
    setTimeout(redirect, 3000); // start work session after 3 sec
});

// function to show the loader
function showLoader(){
    const loader = document.getElementById("loader");
    loader.style.display = "block";
}
// Function to show the overlay
function showOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
}

function redirect(){
   window.location.href = "working_session.html";
}