// 1. 유저에게 태어난 년도를 입력받고
// 2005년 이상이면 -> 성인입니다 아니면 미성년자 입니다
const year = Number(window.prompt("태어난 년도?"));
console.log(year >= 2005 ? "성인입니다" : "미성년자 입니다");

// 2. 자이로드롭을 탈려고 하는데 키를 물어보고, 140 이상이면 탑승 가능 아니면 탑승 불가 출력
const tall = Number(window.prompt("키?"));
console.log(tall >= 140 ? "탑승 가능" : " 탑승 불가");

// 3. 성별과 나이를 물어보고 남성에 20살 이상이면 징집대상입니다 아니면 징집대상이 아닙니다 출력
const age = Number(window.prompt("나이?"));
const gender = window.prompt("성별?");
console.log(age >= 20 && gender == "남자" ? "징집 대상자" : "징집 대상자 아님");

// 4. 다이소에서 물품 총 구매액수를 물어보고 5만원 이상이면 10% 할인된 금액을 주고, 아니면 그냥 금액을 주는 프로그램
const total = Number(window.prompt("총 구매 액수?"));
const sale = total * 0.1
console.log(total >= 50000 ? total - sale : total);

// 5. 나이를 물어보고 20살 이상이면 성인, 19~14이면 청소년 13이면 어린이
const age1 = Number(window.prompt("나이?"));
const result = age1 >=20  ? "성인" : age1 >13 ? "청소년" : "어린이"
