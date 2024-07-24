// Number, String, Boolean, Array
// 변수에 들어가면 데이터 타입 따지기

/*
    Object(그냥 딕셔너리임)
    [key - value] 형태
    key: 중복 안됨, 문자 or 숫자만 가능
    value: 중복 가능, 아무 데이터 타입 가능
*/

const insideout = {
  title: "인사이드아웃",
  limit_age: 12,
  company: "PIXAR",
  running_time: 90,
  genre: ["animation", "drama", "fantasy"],
};

// object 데이터 조회
insideout.title; // 결과: 인사이드아웃
insideout.genre[1]; // 결과: drama

insideout["title"]; // 결과: 인사이드아웃
insideout["genre"][1]; // 결과: drama

// object 데이터 추가
insideout.director = "켈시 맨";

// object 데이터 삭제
delete insideout.limit_age;

/*
    coffee
    커피 이름: ""
    커피 가격: 
    카페인 유무:
    커피 원두 종류:
    커피성분:
*/
const coffee = {
  coffeeName: "아메리카노",
  coffeePrice: 1500,
  coffeeBean: ["일반 원두", "디카페인 원두"],
  ingredients: {
    once_kcal: "80 kcal",
    na: "5mg",
  },
  caffeine: true,
};

console.log(coffee.ingredients.na); // 나트륨 용량
