// 유저에게 배경색, 글 내용 입력받고
// body에 버튼 태그 만들기

const bg = prompt("배경색 & 글내용").split(" ");
const btn = document.createElement("button");
btn.style.backgroundColor = bg[0];
btn.innerText = bg[1];
document.body.appendChild(btn);

// 유저에게 배경색 3가지를 묻고 3가지 각각 box 높이 100 넓이 100을 가진
// 상자 만들기
// ["blue", "balck", "pink"]
const backg = prompt("배경색 3개 입력").split(" ");

backg.forEach((x) => {
    const div = document.createElement("div");
    div.style.height = "100px";
    div.style.width = "100px";
    div.style.backgroundColor = x;
    document.body.appendChild(div);
});
