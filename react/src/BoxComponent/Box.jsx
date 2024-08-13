const Box = (props) => {
    // CSS를 js화 할 때는 중괄호 2개 필요
    const boxStyle = {
        width: "100px",
        height: "100px",
        backgroundColor: props.backgroundColor,
    };

    // 초록 박스, 파란 박스, 빨간색 원, 노란색 원, 컴포넌트 만들고 화면에 출력

    return <div style={boxStyle}></div>;
};

export default Box;
