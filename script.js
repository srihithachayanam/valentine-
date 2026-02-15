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


let cards=document.querySelectorAll(".card");


cards.forEach(card=>{


card.addEventListener("click", function(){


if(firstCard==null){

firstCard=this;

this.style.border="4px solid red";

}
else{

// swap images

let temp=this.src;

this.src=firstCard.src;

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

"images/img1.png",
"images/img2.png",
"images/img3.png",
"images/img4.png",
"images/img5.png",
"images/img6.png"

];

let current=[];

cards.forEach(card=>{

let path=card.getAttribute("src");

current.push(path);

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
