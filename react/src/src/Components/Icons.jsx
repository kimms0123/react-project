import { WiDayFog } from 'react-icons/wi';

const Icon = (props) => {
    // obj도 추출 가능!
    const { IconComponent } = props;

    return (
        <div
            className="flex justify-center items-center"
            style={{ width: '75px', height: '50px' }}
        >
            <IconComponent className="w-6 h-6" />
        </div>
    );
};

export default Icon;
