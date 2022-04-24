const Asset = ({ collection, name, image_url, floor }) => {
    return (
        <div className="w-full py-3 flex flex-row">
            <div className="flex flex-grow flex-col items-start justify-center">
                <p className="text-sm text-neutral-500 pb-3">{collection}</p>
                <p className="text-xl font-bold text-black">{name}</p>
            </div>
            <div className="flex flex-col items-end justify-center">
                <p className="text-xl font-bold text-black">{parseFloat(floor).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Asset;