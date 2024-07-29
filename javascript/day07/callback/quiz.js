// cook! recipe 요리시작! recipe() 요리끝!
// taco 함수 1. 타코 준비 2. 재료 넣기 3. 감싸기
// ramen 함수 1. 물끓이기 2. 면넣기 3. 스프넣기 4. 불끄기

const recipe = (x) => {
    console.log("요리 시작!");
    x();
    console.log("요리 끝!");
};
const taco = (x) => {
    console.log(`1. 타코 준비 2. ${x} 넣기 3. 감싸기`);
};
const ramen = () => {
    console.log("1. 물끓이기 2. 면넣기 3. 스프넣기 4. 불끄기");
};

taco("새우");
recipe(() => taco("새우"));
recipe(() => taco("치즈"));
recipe(() => taco("아보카도"));

recipe(() => {
    console.log(
        "1. 물끓이기 2. 소금 넣기 3. 고기 넣기 4. 음식물 쓰레기에 버리기"
    );
}); // 즉흥으로 callback 함수 만들기
