// function[함수]

function add100(x) {
  return x + 100;
}

// minus100
function minus100(x) {
  return x - 100;
}

function wonyoungthinking(x) {
  return x + "럭키비키잖아⁉";
}

function test(x, y) {
  return (x + y) ** 2;
}

function test1(x) {
  if (x % 2 == 0) {
    return "짝수";
  } else {
    return "홀수";
  }
}

function test2(x, y) {
  x > y ? x : y;
}

// 두 숫자를 넣을때 같으면 같다 아니면 다르다
function test3(x, y) {
  x == y ? "같다" : "다르다";
}

const a = add100(3000);
const b = minus100(1000);
const c = wonyoungthinking("수업을 하고 있는데 마침 휴강이라서");
const d = test(3, 2);
const e = test1(3);

console.log(c);
console.log(d);
console.log(e);
