let password = "011024";


let passwordPage = document.getElementById("passwordPage");
let gamePage = document.getElementById("gamePage");
let letterPage = document.getElementById("letterPage");
let unlockBtn = document.getElementById("unlockBtn");
let error = document.getElementById("error");


function checkPassword(){

let input = document.getElementById("passwordInput").value;

if(input === password){

passwordPage.classList.remove("active");
gamePage.classList.add("active");

}
else{

error.innerText="Try again with your stupid nemo brain! i still like u ❤️";

}

}



let firstCard=null;

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("click", ()=>{

if(firstCard==null){

firstCard=card;
card.style.border="4px solid red";

}
else{

let temp=card.src;
card.src=firstCard.src;
firstCard.src=temp;

firstCard.style.border="4px solid white";
firstCard=null;

checkOrder();

}

});

});





let unlocked=false;


function checkOrder(){

let cards=document.querySelectorAll(".card");

let correct=[

"img1.png",
"img2.png",
"img3.png",
"img4.png",
"img5.png",
"img6.png"

];

let current=[];

cards.forEach(card=>{

let filename = card.src.split("/").pop();

current.push(filename);

});


if(JSON.stringify(correct)===JSON.stringify(current) && !unlocked){

unlocked=true;

unlockBtn.style.display="inline-block";

confetti();

}

}



function showLetter(){

gamePage.classList.remove("active");
letterPage.classList.add("active");

}




function confetti(){

let container=document.getElementById("confetti-container");

let emojis=["💖","💕","💗","💘","✨"];

for(let i=0;i<50;i++){

let div=document.createElement("div");

div.innerText=emojis[Math.floor(Math.random()*emojis.length)];

div.style.position="absolute";

div.style.left=Math.random()*100+"vw";

div.style.top=Math.random()*100+"vh";

div.style.fontSize="24px";

container.appendChild(div);

}

}

