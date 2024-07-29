// 유저에게 주말에 먹었던 음식들을 입력받고
// 콘솔 로그로 먹었던 음식들 나열
// 토요일 아침 음식: 국밥
// 토요일 점심: 파스타
// 토요일 저녁: 김치찌개
const food = [];
food.push(prompt("토요일 점심"));
food.push(prompt("토요일 저녁"));
food.push(prompt("일요일 점심"));
food.push(prompt("일요일 저녁"));

console.log(`주말에 먹은 음식들 ${food}`);
