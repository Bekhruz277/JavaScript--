// ! Callbeak Function 
// function playFootbal(pleyer, callbeak) {
//     console.log(`Name of player ${pleyer}`);
//     callbeak();
// }

// function gols() {
//     console.log("His shot 100 gols");
// }
// playFootbal( "Messi", gols); 

function playFootbal(player, collbek) {
    console.log(`Name of Plauer ${player}`);
    collbek();
}

function gols() {
    console.log("Messi has 100 gols");
}
playFootbal("Messi", gols);