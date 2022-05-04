// const greeting = document.getElementById("greeting");
// const body = document.getElementById("body");
// const paragraph = document.getElementsByClassName("paragraph");

// body.background = "crimson";

// greeting.style.fontSize = "50px";
// greeting.style.color = "red";

// greeting.style.cssText = 'color: #ff0; font-size: 100px'
// greeting.classList.toggle('textH1');
// console.log(greeting);
// console.log(body);

// console.log(paragraph);

// !  ===================== современный

// console.log(greeting); 
const greeting = document.querySelector(".wrapper"),
    btns = document.querySelectorAll("button");
    // btns[0].style.background = 'red';
    
    // ? =============for=============
    // for(i = 0; i < btns.length; i++) {
    //     btns[i].style.padding = "50px";
    // }
    
    // ? ============forEach===========
        // btns.forEach((btn => {
        //     btn.style.background = "red";
        //     btn.style.color = "#fff";
        //     btn.style.border = "none";
        // }));
console.log(btns); 

