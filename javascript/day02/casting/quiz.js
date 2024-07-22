// 프롬프트로 몇년생인가요 물어보고 ex) 2003 입력시
// 콘솔로 '당신의 나이는 22이군요!

const year = Number(window.prompt("몇년생인가요?"));
const age = 2024 - year + 1;

window.console.log(`당신의 나이는 ${age}이군요!`);

// 숫자를 두번 프롬프트로 물어보고, 콘솔로 합/차/곱을 나타내는 프로그램
const num1 = Number(window.prompt("숫자 1"));
const num2 = Number(window.prompt("숫자 2"));
const sum = num1 + num2;
const mius = num1 - num2;
const times = num1 * num2;

window.console.log(`합: ${sum}`);
window.console.log(`차: ${mius}`);
window.console.log(`곱: ${times}`);

// 프롬프트로 한 변의 길이를 입력하고 콘솔로 정사각형의 넓이는 ~ 입니다 출력
const side = Number(window.prompt("한 변의 길이는?"));
const result = side * 4;

window.console.log(`넓이는 ${result}입니다`);

// 아아(1500) 주문 갯수 프롬프트로 물어보고, 라떼(2500) 주문 갯수 프롬프트 물어보고
// 콘솔로 총 가격은 ~ 입니다 
const americano = Number(window.prompt('아아 주문 갯수?'));
const latte = Number(window.prompt('라떼 주문 갯수?'));

const total = americano * 1500 + latte * 2500;

window.console.log(`총 가격은 ${total}입니다`);
