// type casting: 타입 변경

// 문자/불리언 -> 숫자
const first = Number("100"); // 숫자 100
const second = Number("777");
const result = first + second;

const result1 = "100" + "200"

window.console.log(result); // 결과: 877
window.console.log(result1); // 결과: 100200


// 숫자/불리언 -> 문자
const a = String(1500);
const b = String(true);
const third = Number(true); // 1
const fourth = Number(false); // 0

// 숫자/문자 -> 불리언
// 0, -0, "" => false
// 나머지 => true

Boolean("마라탕"); // ture
Boolean(""); // false