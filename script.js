let btn = document.getElementById("btn");
let text = document.getElementById("text");
let author = document.getElementById("author");
let ul = document.getElementById("list");
let quoteUsed = [];

function randomQuote() {
    btn.innerText = "Loading Quote...";
    fetch("http://api.quotable.io/random")
        .then((result) => result.json())
        .then(function(data) {
            text.innerText = data.content;
            btn.innerText = "New Quote";

            quoteUsed.push(data.content);
            let li = document.createElement("li");
            li.innerText = quoteUsed[quoteUsed.length - 1];
            ul.append(li);
        });
}

window.addEventListener("load", randomQuote);
btn.addEventListener("click", randomQuote);