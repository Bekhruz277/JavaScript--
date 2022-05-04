const wrapper = document.querySelector(".wrapper");
const btn2 = wrapper.querySelector(".btn2");

// console.log(document.documentElement); // ! ===== В html все элемента покажет --- documentElement =====
// console.log(document.childNodes); 
// console.log(document.body.lastElementChild);
// console.log(document.body.firstElementChild);

// console.log(btn2.nextElementSibling);

// console.log(document.childNodes); 

// for(let i of document.body.childNodes){
//     if(i.lastName == "#text") {
//         continue;
//     }
//     console.log(i);
// }

const btns = document.querySelectorAll("button");

btns.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        console.log("Yeep, bro " + i);
    })
})