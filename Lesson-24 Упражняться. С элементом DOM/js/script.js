  /* -=- Darsga Topshiriq

1) list of news knopkani ochirip tashlang

2) 'BBC' yozuvni orniga 'UzNews'ga almashtiring va rangini oziz istagan rangni tanglang

3) glavniy fon dagi rasimni ozgartiring. Rasim joylashuvi 'img' papkani ichida

4) bizlarda yangiliklardan tashkil topgan massiv bor. 
Yangiliklarni massiv yordamida chiqaring. Html dan ochirip Faqat JS code yozip.

5) yangiliklarni oldiga ularni raqamlarini qoyip chiqimg (1, 2, 3)

6) read more knopkaga border-radius style qoshing

*/

"use strict";

const newsGenre = document.querySelector(".promo__genre"),
      btnNews = document.querySelector(".promo__btn"),
     Bg = document.querySelector(".promo__bg"),
     listNews = document.querySelector(".promo__interactive-list");


// newsGenre.innerHTML = "Hello"; // ? Изменяет контент               
// newsGenre.innerHTML = `<p>Hello world</p>`; // ? Изменяет контент 

// newsGenre.textContent = `<p>Hello world</p>` // * не можем писать параграф

// newsGenre.insertAdjacentHTML("afterbegin", "<p>Hi, My name is Bekhruz</p>"); // ? добавляет контент  в период 

const news = [
  "FOOTBALL",
  "BASKETBALL",
  "UFC",
  "BOX",
  "AMERICAN FOOTBAL IN EU...",
];

// ? 1 Ответ
// ! № 1 способ
// btnNews.remove();

// ! № 2 способ
// btnNews.addEventListener("click", function () {
//   btnNews.remove();
// });

// ! 2 Ответ
// newsGenre.textContent = "Uznews";
// newsGenre.style.color = "red";

// ! 3 Ответ
// Bg.style.backgroundImage = "url(./img/2.jpg)";

// ! 4 Ответ

listNews.innerHTML = "";
news.forEach((itemNews, index) => {
  listNews.innerHTML += `
  <li class="promo__interactive-item">
    ${itemNews}
      <div class="delete"></div>
    </li>
  ` 
});