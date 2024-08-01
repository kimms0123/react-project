// container
const line = Number(prompt("몇 좌석 존재하나요?"));

const theater = document.createElement("div");
theater.style.display = "grid";
theater.style.gridTemplateColumns = `repeat(14,1fr)`;

// box
const makeSeat = (alphabet) => {
    return Array(14) // 좌석 생성
        .fill("A")
        .map((x, i) => {
            return x + (i + 1);
        });
};

[..."ABCDEFG"].forEach((x) => {
    makeSeat(x).forEach((x) => {
        const seat = document.createElement("div");
        seat.style.width = "50px";
        seat.style.height = "50px";
        seat.style.border = "1px solid black";
        seat.innerText = x;
        theater.appendChild(seat);
    }); // A~G14까지

    makeSeat;
});

document.body.appendChild(theater);
