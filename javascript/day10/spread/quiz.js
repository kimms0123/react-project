// 유저에게 영단어 입력 받고 a,e,i를 제거해서 다시 콘솔로 보여주기
// apple -> appl, banana -> bnn

const word = prompt("영단어");
[...word]
    .filter((x) => {
        const newword = x != "a" && x != "i" && x != "e";
    })
    .join("");

console.log(newword);
