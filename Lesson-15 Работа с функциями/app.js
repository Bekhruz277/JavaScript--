/* Darsga topshiriq:
1) Darsga muvofiq topshiriqning birinchi qismini takrorlang
2) Privat xususiyatlarini tekshiradigan showMyDB funktsiyasini yarating. Agar pozitsiya false turgan
bo'lsa dasturning asosiy ob'ektini konsolga ko'rsatadi
3) writeYourGenres funktsiyasini yarating, unda foydalanuvchi savolga 3 marta javob beradi
"Sizning sevimli janringiz - $ {ketma-ket raqam}". Har bir javob ma'lumotlar genres qatoriga yoziladi
P.S. Funksiyalarni chaqirish shart emas */

let numberOfNews;
function startProject() {
    numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

    while(numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)) {
        numberOfNews = prompt("Siz qancha yangilik ko'rdingiz?");
    }
}
startProject();

const personalNewsDB = {
count: numberOfNews,
news: {},
actors: {},
genres: [],
privat: true,
};

rememberNews();

function showPersonalLevel() {
    if (personalNewsDB.count < 10) {
        console.log("Juda oz sonli yangiliklar o'qilibdi");
        } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
        console.log("Siz klassik tomoshabinsiz");
        } else if (personalNewsDB.count >= 30) {
        console.log("Siz yangilklar ishqibozisiz");
        } else {
        console.log("Xato yuz berdi");
    }
}
showPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalNewsDB);
    }
}

showMyDB(console.log(personalNewsDB.privat));

function writeYourGenres() {
    for(i = 1; i <= 3; i++) {
        personalNewsDB.genres[i -1] = prompt(`Sizning sevimli janringiz nomeri - ${i}`);
    }
}
writeYourGenres();