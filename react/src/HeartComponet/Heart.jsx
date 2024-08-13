import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Heart = () => {
    const [isLove, setIsLove] = useState(false);
    const chageHeart = () => {
        setIsLove(!isLove);
    };

    return <div onClick={chageHeart}>{isLove ? <FaHeart /> : <CiHeart />}</div>;
};

export default Heart;
