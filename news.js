"use strict";

let url = "http://jservice.io/api/random"
let news = fetch(url)
news
.then(resp => resp.json())
.then(data => {
    console.log(data)
    console.log(data[0].category.title)
    console.log(data[0].question)
    console.log(data[0].answer)

    document.getElementById("category").innerText = data[0].category.title
    document.getElementById("question").innerText = data[0].question
    document.getElementById("button").addEventListener("click", () => {
        document.getElementById("answer").innerText = data[0].answer
    });

})







// (async () => {
// let newsA = await fetch("https://newsdata.io/api/1/news?apikey=pub_1075908a72b838733e6c631aed9b14c67ad1c&country=us&language=en&category=technology ")

// console.log(newsA)
// })()

// (async () => {
//     let newsA = await fetch("https://favqs.com/api/qotd")
    
//     console.log(newsA)
// })()



// let data

// fetch("https://favqs.com/api/qotd")
// .then((response) => response.json())
// .then((data) => {console.log(data)})
// console.log(newsA)
// console.log(data)

// let ddd
// fetch("https://favqs.com/api/qotd")
// .then((response) => response.json())
// .then((q) => {
//     ddd = q
// })


// console.log(ddd)

// let url = "https://favqs.com/api/qotd"
// let news = fetch(url)
// news
// .then(d => d.json())
// .then(aaa => console.log(aaa.quote.body))


// fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
//   .then(response => response.json())
//   .then(commits => console.log(commits))
//   .then(commits => console.log(commits[0].author.login))