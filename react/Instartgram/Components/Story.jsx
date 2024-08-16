import StoryPhoto from './PhotoComponents/StoryPhoto';

const Story = (props) => {
    return (
        <div className=" flex flex-col items-center gap-1">
            <StoryPhoto />
            <span className="text-xs font-semibold">
                {props.name || 'YourStory'}
            </span>
        </div>
    );
};

export default Story;
