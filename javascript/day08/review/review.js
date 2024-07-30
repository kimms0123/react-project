const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. 홀수 는 2배 짝수는 제곱으로 다시 만들기
const one = arr.filter((x) => {
    return x % 2 == 1 ? x * 2 : x ** 2;
});
// 2. 3의 배수는 '🥕' 5의 배수는 '🍒' 나머지는 '🍉'
const two = arr.filter((x) => {
    if (x % 3 == 0) {
        return "🥕";
    } else if (x % 5 == 0) {
        return "🍒";
    } else {
        return "🍉";
    }
});

const friuts = ["apple", "banana", "melon", "kiwi", "mango", "starwberry"];

// 3. 6글자 이상만 과일 명단 남기기
const three = friuts.filter((x) => {
    return x.length >= 6;
});

// 4. 알파벳 a가 포함된 과일만 남기기
const four = friuts.filter((x) => {
    x.includes("a");
});
