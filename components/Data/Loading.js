const Loading = () => {
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="flex flex-row space-x-4">
                <div className="w-4 h-4 bg-neutral-200 animate-pulse" />
                <div className="w-4 h-4 bg-neutral-200 animate-pulse" />
                <div className="w-4 h-4 bg-neutral-200 animate-pulse" />
            </div>
        </div>
    );
};

export default Loading;