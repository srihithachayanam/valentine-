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
enableDrag();

}
else{

error.innerText="Wrong password. Try again with your stupid nemo brain. I still like you 💖";

}

}



let container=document.getElementById("gameContainer");

let dragged;


function enableDrag(){

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("dragstart",function(){

dragged=this;

});

card.addEventListener("dragover",function(e){

e.preventDefault();

});

card.addEventListener("drop",function(){

container.insertBefore(dragged,this);
checkOrder();

});

});

}



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

current.push(card.getAttribute("src"));

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

for(let i=0;i<40;i++){

let div=document.createElement("div");

div.className="confetti";

div.innerText=emojis[Math.floor(Math.random()*emojis.length)];

div.style.left=Math.random()*100+"vw";

div.style.fontSize="24px";

div.style.animationDuration="3s";

container.appendChild(div);

setTimeout(()=>div.remove(),3000);

}

}



function createFloatingHeart(){

let container=document.getElementById("floating-hearts");

let heart=document.createElement("div");

heart.className="floating-heart";

heart.innerText="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize="20px";

heart.style.animationDuration="6s";

container.appendChild(heart);

setTimeout(()=>heart.remove(),6000);

}


setInterval(createFloatingHeart,500);