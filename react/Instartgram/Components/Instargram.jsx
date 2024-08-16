import Navigation from './Navigation';
import StoryPhoto from './PhotoComponents/StoryPhoto';
import Story from './Story';
import Storyboard from './Storyboard';
import Top from './Top';

const Instargram = () => {
    return (
        <div className="w-screen h-screen">
            <div className="w-full h-full max-w-sm m-auto">
                <Top />
                <Navigation />
                <Storyboard friends={10} />
            </div>
        </div>
    );
};
export default Instargram;
