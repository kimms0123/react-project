// 1. 각도를 물어보고, 0~90 예각, 90 직각, 90~180 둔각, 180 평각
const angle = Number(prompt("각도 입력"));
if (angle > 0 && angle < 90) {
  alert("예각");
} else if (angle == 90) {
  alert("직각");
} else if (angle < 180) {
  alert("둔각");
} else if (angle == 180) {
  alert("평각");
}
// 2. 영어 시험 점수를 입력하고, 90 이상: A 80: B 70: c 60: d 그 외 나락
const score = Number(prompt("영어 점수 입력"));
if (score > 90) {
  alert("A");
} else if (score > 80) {
  alert("B");
} else if (score > 70) {
  alert("C");
} else if (score > 60) {
  alert("D");
} else {
  alert("공부 좀 하자");
}
// 3. 오브젝트 문제임 mbti를 물어봐서 어떤 성향인지 알려주는 프로그램
// e 인가요 i인가요
// n 인가요 s인가요 ...
// intp => 내성적이고 공상적이고, 이성적이고, 즉흥적인 성격

const ei = prompt("e이냐 i이냐");
const ns = prompt("n이냐 s이냐");
const tf = prompt("t이냐 f이냐");
const pj = prompt("p이냐 j이냐");

const mbti = {
  e: "외향적",
  i: "내성적",
  s: "현실적",
  n: "공상적",
  t: "이성적",
  f: "감성적",
  p: "즉흥적",
  j: "계획적",
};

alert(
  `당신의 mbti는 ${mbti[ei]}이고, ${mbti[ns]}이고, ${mbti[tf]}이고, ${mbti[pj]}입니다`
);
