// String => Array 타입 캐스팅
// spread 연산자
const a = [..."abcdefg"];
console.log(a);

// Array -> String type
// 1. 지양
a.toString(); // a,b,c,d,e,f,g

// 2. 지향
a.join(""); // abcdefg
a.join("!!"); // a!!b!!c!!d!!e!!f!!g!!
