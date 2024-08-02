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

const menu = document.createElement("div");
menu.style.display = "grid";
menu.style.gridTemplateColumns = "repeat(2,1fr)";

starbucks.forEach((x) => {
    const box = document.createElement("div");
    box.innerHTML = `
        <h4>${x.name}</h4>   
        <h5>${x.price} ${x.shot}</h5>   
    `;
    box.style.boxShadow = "rgba(0, 0, 0, 0.16) 0px 1px 4px";
    box.style.display = "flex";
    box.style.flexDirection = "colmn";
    box.style.justifyContent = "center";
    box.style.alignItems = "center";
    box.style.padding = "20px";
    menu.appendChild(box);
});
document.body.appendChild(menu);
