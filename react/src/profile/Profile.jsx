import ProfileImage from "./ProfileImage";
import ProfileINfo from "./ProfileInfo";

const Profile = () => {
    return (
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <ProfileImage src="https://i.namu.wiki/i/7SaViOeem6L_pjysEy7GHvuU8C85b5REwCXmJcbS4DBnpAZgmiTH3YclOVU-2SSUObv9HOi_CBEp4LbnOO3qaO_F3a9yb8AR0WehMcbz65pHs415uZ7TAUKM7ngigyrSAp-UlDLYgA_vwBTJHLYV1Q.webp"></ProfileImage>
            <ProfileINfo name="장원영" date="2024.08.12"></ProfileINfo>
        </div>
    );
};
export default Profile;
