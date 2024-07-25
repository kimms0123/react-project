// 마을버스: 1500, 고속버스: 2000, 우등버스: 3000
// 나이 13살 이하: 무료 65이상 30%인 버스

const bus_name = ["마을버스", "고속버스", "우등버스"];
const bus_fee = [1500, 2000, 3000];
const selectBus = Number(
  prompt("버스 종류 선택[1. 마을버스 2. 고속버스 3. 우등버스")
);
const age = Number(prompt("나이 입력"));

if (age <= 13) {
  console.log(`${bus_name[bus]} 0원 결제 부탁드립니다`);
} else if (age >= 65) {
  console.log(`${bus_name[bus]} ${bus_fee[bus] * 0.7} 결제 부탁드립니다`);
} else {
  console.log(`${bus_name[bus]} ${bus_fee[bus]} 결제 부탁드립니다`);
}
