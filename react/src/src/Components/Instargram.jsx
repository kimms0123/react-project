import { MdOutlineCameraAlt } from 'react-icons/md';
import Navigation from './Navigation';
import { PiTelegramLogo, PiTelevisionSimpleThin } from 'react-icons/pi';
import Top from './Top';

const Instargram = () => {
    return (
        <div className="w-screen h-screen">
            <div className="w-full h-full max-w-sm m-auto">
                <Top />
                <Navigation></Navigation>
            </div>
        </div>
    );
};
export default Instargram;
