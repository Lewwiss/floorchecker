const Asset = ({ collection, name, contract, floor, token }) => {
    return (
        <div className="w-full flex flex-row">
            <div className="flex flex-grow flex-col items-start justify-center">
                <p className="text-sm text-neutral-400 pb-4">{collection}</p>
                <div className="flex flex-row space-x-2 items-center w-40 sm:w-56 md:w-96">
                    <a href={`https://opensea.io/assets/${contract}/${token}`} target="_blank" className="truncate text-md font-medium text-white">{name}</a>
                </div>
            </div>
            <div className="flex flex-col items-end justify-center">
                <p className="text-xl font-medium text-white">{parseFloat(floor).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Asset;