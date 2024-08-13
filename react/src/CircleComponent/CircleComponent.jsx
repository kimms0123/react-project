const Circle = (props) => {
    const circlestyle = {
        width: "100px",
        height: "100px",
        borderRadius: "99999px",
        backgroundColor: props.backgroundColor,
    };

    return <div style={circlestyle}></div>;
};

export default Circle;
