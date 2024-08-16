import { CiHeart, CiSearch, CiSquarePlus } from 'react-icons/ci';
import { MdHomeFilled } from 'react-icons/md';
import Icon from './Icons';
import Photo from './PhotoComponents/Photo';

const Navigation = () => {
    return (
        <footer
            style={{ backgroundColor: '#FAFAFA' }}
            className="fixed bottom-0 max-w-sm m-auto w-full flex justify-around items-center"
        >
            <Icon IconComponent={MdHomeFilled}></Icon>
            <Icon IconComponent={CiSearch}></Icon>
            <Icon IconComponent={CiSquarePlus}></Icon>
            <Icon IconComponent={CiHeart}></Icon>
            <Photo size="small" />
        </footer>
    );
};

export default Navigation;
