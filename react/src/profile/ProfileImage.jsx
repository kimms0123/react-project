const ProfileImage = (props) => {
    return (
        <div style={{ width: "50px", height: "50px", borderRadius: "9999px" }}>
            <img
                src={props.src}
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "9999px",
                }}
            ></img>
        </div>
    );
};

export default ProfileImage;
