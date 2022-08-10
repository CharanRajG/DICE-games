let k1 = Math.floor(Math.random()*6) + 1;

let randomdice1 ="img/dice" + k1 + ".png";

let k2 = Math.floor(Math.random()*6) + 1;

let randomdice2 = "img/dice" + k2 + ".png";

document.querySelectorAll("img")[0].src = randomdice1 ;

document.querySelectorAll("img")[1].src = randomdice2 ;

if (k1 > k2){
    document.getElementById("h1").innerHTML = "Player 1 won 🚩";
    document.getElementById("p1").classList.add("p1x");
}

else if (k1 < k2){
    document.getElementById("h1").innerHTML = "Player 2 won 🚩";
    document.getElementById("p2").classList.add ("p2x");
}
else{
    document.getElementById("h1").innerHTML = "🚩 DRAW 🚩";
    document.getElementById("p1").classList.add("p1x");
    document.getElementById("p2").classList.add("p2x");
}