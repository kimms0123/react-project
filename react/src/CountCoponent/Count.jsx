import { useState } from "react";

const Count = () => {
    // useState(초기값)
    const [num, setnum] = useState(10);
    const [fruit, setFruits] = useState("🍒");

    const changeFruits = () => {
        setFruits(fruit == "🍒" ? "🍎" : "🍒");
    };

    const changeCount = () => {
        setnum(num + 1);
    };

    return (
        <>
            <div>{num}</div>
            <div onClick={changeFruits}>{fruit}</div>
            <div onClick={changeCount}>{num}</div>
        </>
    );
};

export default Count;
