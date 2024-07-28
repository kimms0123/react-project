/*
    배열, 과일, 개수를 매개변수로 입력 받고, 
    배열에 {name: 과일, count: 갯수} 추가되는 함수 만들기
*/
const empty = [];

const add = (arr, fruit, num) => {
    arr.push({ name: fruit, count: num });
};

add(empty, "사과", 5);

/*
    함수 내부에서 함수가 자동으로 안 뜨는 이유
    함수로 정의한 매개변수의 타입이 어떤 타입인지 모르기 때문에 
    표시가 되지 않는다
*/
