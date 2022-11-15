const Asset = ({ collection, name, contract, floor, image }) => {
    if (name === null || name === "" || name === undefined) return (
        <a className="border-2 border-dashed p-6 bg-white">
            <div className="w-20 h-20 mb-6 overflow-hidden bg-neutral-200 animate-pulse" />
            <p className="text-sm text-neutral-500 mb-3 truncate bg-neutral-200 animate-pulse h-5"></p>
            <p className="font-medium leading-8 mb-3 truncate bg-neutral-200 animate-pulse h-8"></p>
            <p className="text-sm text-neutral-500 bg-neutral-200 animate-pulse h-5"></p>
        </a>
    );

    return (
        <a href={`/`} className="border-2 border-dashed p-8 bg-white">
            <img src={image ? image : "null"} className={`w-32 h-32 bg-neutral-200 mb-6 overflow-hidden ${image === null ? "animate-pulse" : ""}`} />
            <p className="text-sm text-neutral-500 mb-3 truncate">{collection} - {floor}</p>
            <p className="font-medium leading-8 mb-5 truncate">{name}</p>
            
            <button className="text-sm text-white font-semibold py-3.5 px-8 bg-black outline-none flex flex-row items-center duration-200 hover:scale-105 hover:-rotate-1">
                View on OpenSea
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
            </button>
        </a>
    );
};

export default Asset;