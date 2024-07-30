// document: html을 담당하는 타입

// Element_Type
const a = document.createElement("h1"); // h1 태그 만들어
a.innerText = "점메추!"; // h1 태그 안에 "점메추" 넣어줘

document.body.appendChild(a); // html의 <body> 안에 자식으로 넣어라

// 1. Button 태그를 만들고, 내용은 럭키비키! body에 넣어주기
const button = document.createElement("button");
button.innerText = "럭키비키!";
document.body.appendChild(button);

// 2. div 태그 만들고, 유저에게 아침에 먹었던 음식 물어보고 div 내용에 넣고 body에 보여주기
const div = document.createElement("div");
div.innerText = prompt("아침에 먹은 음식");
document.body.appendChild(div);
