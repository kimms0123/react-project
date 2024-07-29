const arr = [1, 2, 3, 4, 5];

// map: 요소들을 바꾸는 기능
const test = arr.map(() => {
    return 1;
});

// all 10
const test2 = arr.map(() => {
    return 10;
});

// 홀수 숫자 1 짝수 숫자 2
const oneTwo = arr.map((x) => {
    return x % 2 == 1 ? 1 : 2;
});

console.log(oneTwo);

const stringArr = arr.map((x) => {
    return String(x);
});

// filter: 요소들을 필터링
const oddArr = arr.filter(() => {
    return x % 2 == 1; // 홀수만 남겨라
});
console.log(`oddArr: ${oddArr}`);

// 퀴즈
// 1. 3의 배수만 살리기
arr.filter((x) => {
    return x % 3 == 0;
});
// 2. 6이상만 살리기
arr.filter((x) => {
    return x >= 6;
});

const fruit = [
    "peach",
    "apple",
    "mango",
    "strawberry",
    "avocado",
    "grape",
    "kiwi",
    "watermelon",
    "melon",
];

// 1. melon이 들어간 과일만 살리기
fruit.filter((x) => {
    return x.includes("melon");
});

// 2. 글자 길이가 6글자 이상만 살리기
fruit.filter((x) => {
    return x.length >= 6;
});

// 3. 모든 과일 대문자로 바꾸기
fruit.filter((x) => {
    return x.toUpperCase();
});
