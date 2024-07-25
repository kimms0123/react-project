// 뉴스기사 입력 받고, 바꾸고 싶은 단어로 바꾸고
// 바뀐 단어들로 대체된 뉴스기사를 콘솔로 보여주기
// const news = prompt("뉴스 기사 입력");
// const word = prompt("바꾸고 싶은 단어");
// const newword = prompt("바꿀단어");

// // 해당 단어 전체 바꿈
// const newnews = news.replaceAll(word, newword);

// console.log(newnews);

// 단어와 숫자를 입력하면 대문자화 시켜서 숫자만큼 반복된 단어 돌려주는 함수
const word = prompt("단어 입력");
const num = Number(prompt("반복수"));
function test(word, num) {
  return word.toUpperCase().repeat(num);
}
