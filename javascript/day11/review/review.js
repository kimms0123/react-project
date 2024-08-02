// 1. 유저에게 그리드 갯수를 물어보고, 그 갯수에 따라 a~z까지 각가 내용이 담긴 box 나열

// 그리드 갯수
const column = Number(prompt("그리드 갯수"));

// container
const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${column},1fr)`;

// A-Z까지 box 만들기
[..."ABCEDFGHIJKLMNOPQRSTUWXYZ"].forEach((x) => {
    const box = document.createElement("div");
    box.style.boxShadow = `rgba(0, 0, 0, 0.24) 0px 3px 8px`;
    box.style.display = "flex";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.padding = "20px";
    box.innerText = x;
    container.appendChild(box);
});
document.body.appendChild(container);
