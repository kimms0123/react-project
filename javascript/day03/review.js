// 1. 유저에게 점심 메뉴 물어보고 콘솔로 ~점심을 먹었더니 맛있었겠군요! 출력
const lunch = window.prompt("점심 메뉴");
window.console.log(`${lunch}를 먹었다니 맛있었겠군요!`);

// 2. 밑변 그리고 높이를 물어보고 콘솔로 정삼각형의 넓이 ~ 입니다
const width = Number(window.prompt("밑변의 길이는?"));
const height = Number(window.prompt("높이의 길이는?"));

const result = width * height * 0.5;
window.console.log(`정삼각형의 넓이는 ${result}입니다`);

// 3. 유저에게 원화를 물어보고 엔화로 바꿔주는 프로그램
// ex) 10000 -> 1129 나오기
const won = Number(window.prompt("환전하고 싶은 금액"));
const yen = 1130 / 10000;
window.console.log(`엔화: ${won * yen}`);

