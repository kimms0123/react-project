// 1. 세로
const makeBox = (x) => {
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = x;
    document.body.appendChild(div);
};

makeBox("red");
makeBox("bule");
makeBox("yellow");
makeBox("green");

// 2. 가로
// 1) container 만들기
// 2) flex 주기
// 3) box 5개 생성
// 4) container에 넣기
// 5) container를 body에 넣기

// box 생성하는 함수
const makeBox1 = (x) => {
    const div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = x;
    return div;
};

// container 생성
const container = document.createElement("div");
container.style.display = "flex";

const color = prompt("색 입력").split(" ");
// box 생성
color.forEach((x) => {
    const div = makeBox1(x);
    container.appendChild(div);
});

// container를 body에 추가
document.body.appendChild(container);
