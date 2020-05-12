const creditTab = document.getElementById("credittab");
const winnings = document.getElementById("winningstab");
const creditScore = document.getElementById("creditscore");
const winningScore = document.getElementById("winningscore");
const x = document.getElementById("first");
const y = document.getElementById("second");
const z = document.getElementById("third");
const outputmessage = document.getElementById("message");
const spin = document.getElementById("Spin")
const credit = document.getElementById("Credit")
const collect = document.getElementById("Collect")

spin.addEventListener("click", spinBtn);
credit.addEventListener("click", addCredit);
collect.addEventListener("click", clearWinnings);

let apple = "images/apple.png";

let banana = "images/banana.png";

let bar = "images/bar.png";

let cherries = "images/cherries.png"

let grapes = "images/grapes.png";

let lemon = "images/lemon.png";

let melon = "images/melon.png";

let orange = "images/orange.png";

let images = [apple, banana, bar, cherries, grapes, lemon, melon, orange];
let selectionx = Math.floor(Math.random() * 8);
let selectiony = Math.floor(Math.random() * 8);
let selectionz = Math.floor(Math.random() * 8);
x.innerHTML = "<img src="+images[selectionx]+">";
y.innerHTML = "<img src="+images[selectiony]+">";
z.innerHTML = "<img src="+images[selectionz]+">";

let cs = [];
creditScore.innerText = `${cs.length}`;

let w = [];
winningScore.innerText = `${w.length}`;

function addCredit() {
    cs.push(1);
    creditScore.innerText = `${cs.length}`;
}

function spinBtn() {
    if (cs.length>0) {
    cs.splice(0, 1);
    creditScore.innerText = `${cs.length}`;
    outputmessage.innerText = "";

    let selectionx = Math.floor(Math.random() * 8);
    let selectiony = Math.floor(Math.random() * 8);
    let selectionz = Math.floor(Math.random() * 8);
    x.innerHTML = "<img src="+images[selectionx]+">";
    y.innerHTML = "<img src="+images[selectiony]+">";
    z.innerHTML = "<img src="+images[selectionz]+">";
    
    if (selectiony == selectionz) {
        outputmessage.innerText = "Congratulations! You've won 5 points!";
        for (let i = 0; i < 5; i++){
            w.push(1)
        }
        winningScore.innerText = `${w.length}`;
    }
    else if (selectionx == selectiony == selectionz) {
        outputmessage.innerText = "Congratulations! You've won 10 points!";
        for (let i = 0; i < 10; i++){
            w.push(1)
        }
        winningScore.innerText = `${w.length}`;
    }


    }
    else {
        alert("You need credit to play! Try pressing the credit button!")
    }
}

function clearWinnings () {
    if (w.length>0) {
        outputmessage.innerText = `${w.length} points have been collected!`;
        w.length = 0;
        winningScore.innerText = `${w.length}`;
    }
    else {
        alert("You have no winnings! Win something!");
    }
}