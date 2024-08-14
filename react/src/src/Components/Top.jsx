import Icon from './Icons';
import { PiTelegramLogo, PiTelevisionSimpleThin } from 'react-icons/pi';
import { AiOutlineCamera } from 'react-icons/ai';

const Top = () => {
    return (
        <div
            className="w-full flex justify-between items-center"
            style={{ backgroundColor: '#FAFAFA' }}
        >
            <Icon IconComponent={AiOutlineCamera}></Icon>
            <div style={{ width: '105px', height: '30px' }}>
                <img
                    className="w-full h-full"
                    src="https://blog.kakaocdn.net/dn/b5QczF/btrehC6dzmX/7VS9KZZIkBlYV2GKnuUGCK/img.png"
                    alt=""
                />
            </div>
            <div className="flex items-center">
                <Icon IconComponent={PiTelevisionSimpleThin}></Icon>
                <Icon IconComponent={PiTelegramLogo}></Icon>
            </div>
        </div>
    );
};

export default Top;
