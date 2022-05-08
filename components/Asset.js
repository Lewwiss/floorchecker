const Asset = ({ collection, name, contract, floor, token }) => {
    return (
        <div className="w-full flex flex-row">
            <div className="flex flex-grow flex-col items-start justify-center">
                <p className="text-xs font-medium text-slate-600 pb-4">{collection}</p>
                <div className="flex flex-row space-x-2 items-center w-40 sm:w-56 md:w-96">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="#6a667c">
                        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    <a href={`https://opensea.io/assets/${contract}/${token}`} target="_blank" className="truncate text-md font-bold text-white">{name}</a>
                </div>
            </div>
            <div className="flex flex-col items-end justify-center">
                <p className="text-md font-bold text-white">{parseFloat(floor).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Asset;