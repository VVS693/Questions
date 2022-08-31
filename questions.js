"use strict";

let buttonAnswer = document.getElementById("button")
let buttonNext = document.getElementById("title")

function question() {
    let url = "https://jservice.io/api/random"
    let news = fetch(url)
    news
    .then(resp => resp.json())
    .then(data => {
        document.getElementById("category").innerText = data[0].category.title
        document.getElementById("question").innerText = data[0].question
        buttonAnswer.addEventListener("click", () => {
            buttonAnswer.classList.add("anime")
            buttonAnswer.addEventListener("animationend", () => {
                buttonAnswer.classList.remove("anime")
            }, false)
            document.getElementById("answer").innerText = data[0].answer
        });
    })
}

question()
buttonNext.addEventListener("click", () => {
    buttonNext.classList.add("anime")
    buttonNext.addEventListener("animationend", () => {
        buttonNext.classList.remove("anime")
    }, false)
    document.getElementById("answer").innerText = ""
    question()
})
