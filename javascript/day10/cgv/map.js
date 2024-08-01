// 1. 배열 만들기
const a = Array(10).fill("A");

// 2.
const b = Array(10)
    .fill("")
    .map((x, i) => {
        return i;
    });

//["A1", "A2" ... "A14"]
const c = Array(14)
    .fill("A")
    .map((x, i) => {
        return x + (i + 1);
    });

console.log(c);
