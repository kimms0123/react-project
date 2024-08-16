import Story from './Story';

const Storyboard = (props) => {
    return (
        <div>
            <div className="border-b border-zinc-200 flex gap-2 items-center p-1 overflow-x-scroll">
                {Array(props.friends || 1)
                    .fill()
                    .map((v) => (
                        <Story />
                    ))}
            </div>
        </div>
    );
};

export default Storyboard;
