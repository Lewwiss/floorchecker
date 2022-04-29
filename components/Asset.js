const Asset = ({ collection, name, image_url, floor }) => {
    return (
        <div className="w-full flex flex-row">
            <div className="flex flex-grow flex-col items-start justify-center">
                <p className="text-xs font-medium text-slate-600 pb-3">{collection}</p>
                <p className="text-md font-bold text-white">{name}</p>
            </div>
            <div className="flex flex-col items-end justify-center">
                <p className="text-md font-bold text-white">{parseFloat(floor).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Asset;