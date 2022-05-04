const btn = document.querySelector(".btn"),
    btnH1 = document.querySelector(".btnH1"),
    h1 = document.querySelector(".h1"),
    a = document.querySelector("a"),
    btnDiv = document.querySelector(".btnDiv"),
    div = document.querySelector(".div"),
    h2 = document.querySelector("h2"),
    input = document.querySelector("input");


input.addEventListener("input", (e) => {
    h2.innerHTML = e.target.value
});
// ! 1 Способ

// btn.addEventListener("mousemove", () => {
//     console.log("Hello world");
// });

// const callFunc =  () => {
//     console.log("bro");
// }
// btn.addEventListener("mousemove", callFunc);

// ! 2 Способ 

// function hi() {
//     console.log("Hello bro");
// }

// ! 3 Способ

// btn.onclick = function () {
//     console.log("h");
// }

// ! ===============Counter===============

let Counter = 0;
btnH1.addEventListener("click", () => {
    h1.innerHTML = Counter++
});

// ! addEventListener (E)

a.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Hi,bro")
});

btnDiv.addEventListener("click", (e) => {
    div.style.background = "red";
});