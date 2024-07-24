/* 
    condition
    if(조건문){
        실행문
    }
}
*/

/*
const number = prompt("숫자 5를 눌러봐");
if (number == 5) {
  alert("5를 눌렀군요");
}
*/

/*
// 숫자를 입력하고 양수이면 양수네요! alert 출력
const num = Number(prompt("숫자 입력"));
if (num > 0) {
  alert("양수입니다");
}
*/

/*
const num = Number(prompt("숫자 입력"));
if (num > 0) {
  alert("양수입니다");
} else if (num == 0) {
  alert("0입니다");
} else {
  alert("음수입니다");
}
*/

// 나이를 입력하고 20살 이상이면 성인, 13살 이상이면 청소년, 아니면 어린이 출력
const age = Number(prompt("나이 입력"));
if (age >= 20) {
  console.log("성인 입니다.");
} else if (age >= 13 && age < 20) {
  console.log("청소년 입니다.");
} else {
  console.log("어린이 입니다");
}

// 17~19: 고등학생, 14~16: 중학생 8~13: 초등학생, 그외 어린이
if (age >= 17) {
  console.log("고등학생");
} else if (age >= 14) {
  console.log("중학생");
} else if (age >= 8) {
  console.log("초등학생");
} else {
  console.log("어린이 입니다");
}
