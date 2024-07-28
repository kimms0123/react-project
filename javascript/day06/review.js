// 1. 온도를 입력 받고 0이하면 추워요
// 0 ~ 10 쌀쌀해요, 10~20 쾌적 20~30 살짝 덥슈
// 30 이상이면 더워요 함수

function temperature (temp){
    if (tem < 0) {
        return "추워요";
    } else if (tem >= 0 && tem <= 10 ){
        return "쌀쌀해요";
    } else if (tem >= 10 && tem <= 20 ){
        return "쾌적해요";
    } else if (tem >= 20 && tem <= 30 ){
        return "살짝 더워요";
    } else {
        return " 더워요";
    }
}

// 2. 올리브영에서 3만원 이상 구매하면, 10% 할인해주고 5만원 이상 구매하면 20% 할인해 주는 가격 계산 함수
const price = prompt("구매 금액");

function oliveyoung (price) {
    if (price >= 50000) {
        return {originPrice: price, discountPrice:price * 0.8};
    }else if (price) {
        return price *0.9;
    } else {
        return price;
    }
}

