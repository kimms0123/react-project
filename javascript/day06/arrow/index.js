// general function[일반 함수]
function smaller(x, y) {
    return x > y ? y : x;
}

// arrow function[화살표 함수]
const smaller1 = (x, y) => {
    return x > y ? y : x;
};

// 어떤 단어가 들어오면 뒤에 '!' 붙여서 돌려주는 함수
const test1 = (word) => {
    return word + "!";
};

// 어떤 숫자가 들어오면 반 나눠서 돌려주는 함수
const test2 = (x) => {
    return x / 2;
};

// 어떤 두 숫자가 들어오면 합치고 두배해서 돌려주는 함수
const test3 = (x, y) => {
    return (x + y) * 2;
};

// 어떤 배열과 과일을 넣었을 때, 배열에 과일을 추가해주는 함수
// const my = ["토마토", "키위"];
// const you = ["tomato", "apple"];

// const cart = (arr, fruit) => {
//     arr.push(fruit);
// };

/* 
    어떠한 배열과 과일을 영어로 넣었을 때,
    과일에 알파벳이 a,p가 들어가면 배열에 추가가 안되고
    그게 아니면 추가되는 함수 만들기
*/

const box = (arr, fruit) => {
    if (fruit.includes("a") && fruit.includes("p")) {
        arr.push(fruit);
    }
};

// 70 <= pw.length && pw.length <= 80

// 비밀번호를 입력했을 때, ! or #이 들어가면
// 안들어가면 특수문자 필수 출력
// 비밀번호의 길이가 6~20사이가 아니면 비밀번호 길이 재수정
// 비밀번호의 시작이 IT or it로 시작안하면 반드시 it or IT로 시작
// 다 통과되면 비밀번호 통과를 돌려주는 함수
const passwd = (pw) => {
    if (!pw.includes("!") || !pw.includes("#")) {
        return "특수 문자 필수!";
    } else if (pw.length <= 6 || pw.length < 20) {
        return "비밀번호 길이 재수정";
    } else if (!pw.start("IT") || !pw.start("it")) {
        return "시작 IT or it";
    } else {
        return "비밀번호 통과";
    }
};
