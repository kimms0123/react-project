import Photo from './Photo';

const StoryPhoto = () => {
    return (
        <div
            style={{
                width: '64px',
                height: '64px',
                border: '2px solid #D91A46',
            }}
            className="flex justify-center items-center p-1 rounded-full"
        >
            <Photo />
        </div>
    );
};
export default StoryPhoto;
