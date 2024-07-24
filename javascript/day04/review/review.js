// 1. 자동차 속도를 입력하고, 제한 속도입력하여, 자동차 속도가 과속이면 과속입니다 아니면 안전운행 중입니다 출력
const speed = Number(window.prompt("자동차 속도"));
const limitSpeed = Number(window.prompt("제한 속도"));
const result = speed > limitSpeed ? "과속입니다" : "안전운행 중입니다";

console.log(result);

// 2. [영국, 프랑스, 독일, 스페인. 이탈리아, 스위스] 중에서 가고 싶은 국가를 0~5까지 번호로 입력하면, 콘솔로 ~ 나라를 가고 싶어 하군요 다음에 같이가요 출력
const contry = ["영국", "프랑스", "독일", "스페인", "이탈리아", "스위스"];
const choice = Number(
  window.prompt(
    "0영국 1프랑스 2독일 3스페인 4이탈리아 5스위스 가고 싶은 나라 선택"
  )
);
console.log(`${contry[choice]}나라를 가고 싶군요! 같이 갑시다`);
