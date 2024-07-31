// js에 html/css 모두 담당했을 시 코드가 길어짐
// 각각 담당하는 역할을 코드 분배하는게 Best

// 엘리먼트 타입
const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid black";

const bu = document.createElement("button");
bu.innerText = "버튼";

div.appendChild(bu);
document.body.appendChild(div);
