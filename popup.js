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