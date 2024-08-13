const MyButton = (props) => {
    const shape = {
        hard: "0px",
        smooth: "5px",
        round: "45px",
    };

    const state = {
        primary: {
            backgroundColor: "#205BF3",
            color: "white",
            border: "none",
        },
        hover: {
            backgroundColor: "#4780F5",
            color: "white",
            border: "none",
        },
        secoundary: {
            backgroundColor: "transparent",
            color: "black",
            border: "1px solid #205BF3",
        },
        decative: {
            backgroundColor: "#979797",
            color: "#E8E8E8",
            border: "none",
        },
    };

    const buttonstyle = {
        padding: "10px 45px",
        fontSize: "32px",
        borderRadius: shape[props.shape],
        ...state[props.state], // ...연산자: 오브젝트 껍데기 벗겨줌
    };
    return <button style={buttonstyle}>Button</button>;
};

export default MyButton;
