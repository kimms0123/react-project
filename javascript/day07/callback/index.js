// 함수: 코드를 모아놓은 하나의 박스

const luckybiky = (x) => {
    return x + "럭키비키자나~";
};

luckybiky("월요일 아침");

// callback: 함수 안에 함수
const ive = (x) => {
    console.log("아이브 멤버");
    x();
    console.log("끝");
};

const wonyoung = () => {
    console.log("장원영");
};
const youjin = () => {
    console.log("안유진");
};

ive(wonyoung);
ive(youjin);
