const starbucks = [
    { name: "americano", price: 3000, shot: 2, ingredients: ["water", "been"] },
    { name: "latte", price: 4000, shot: 2, ingredients: ["milk", "been"] },
    {
        name: "frappuccino",
        price: 4500,
        shot: 2,
        ingredients: ["milk", "been", "shake"],
    },
    {
        name: "moca",
        price: 4500,
        shot: 2,
        ingredients: ["milk", "been", "chocolate"],
    },
];

// starbucks 메뉴들의 이름과 가격을 콘솔로 출력
starbucks.forEach((x) => {
    console.log(x.name + x.price);
});

// starbucks 메뉴들의 이름을 대문자로 출력하기
starbucks.forEach((x) => {
    console.log(x.name.toUpperCase());
});

// 가격이 4000원인 메뉴만 콘솔로 나타내기
starbucks.forEach((x) => {
    if (x.price == 4000) {
        console.log(x.name);
    }
});

// 이름을 대문자화 하고, 가격은 2000원 더하고, 성분은 얼음 추가하여 바꾸기
const newStarbucks = starbucks.map((x) => {
    const name = x.name.toUpperCase();
    const price = x.price + 2000;
    x.ingredients.push("ice");

    return {
        name: name,
        price: price,
        ingredients: x.ingredients,
        shot: x.shot,
    };
});
console.log(newStarbucks);

// 이름의 길이가 6글자 이상이면 대문자화, milk가 포함되면 가격은 1000원 추가
const newst = starbucks.map((x) => {
    const name = x.name.length >= 6 ? x.name.toUpperCase() : x.name;
    const price = x.ingredients.includes("milk") ? x.price + 1000 : x.price;
    return {
        name: name,
        price: price,
        shot: x.shot,
        ingredients: x.ingredients,
    };
});
console.log(newst);

// 각 가격을 10% 할인된 가격으로 바꾸고, 이름 뒤에 ☕추가, shot 우유가 포함되면 1개 추가 성분은 지우기
const starbucks2 = starbucks.map((x) => {
    const price = x.price * 0.9;
    const name = x.name + "☕";
    const shot = x.ingredients.includes("milk") ? x.shot + 1 : x.shot;

    return { name: name, price: price, shot: shot };
});
console.log(starbucks2);
