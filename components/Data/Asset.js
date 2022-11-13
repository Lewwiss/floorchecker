const Asset = ({ collection, name, contract, floor, image }) => {
    return (
        <a href={`https://opensea.io/assets/${contract}/`} className="border-2 border-dashed p-6 bg-white">
            <img src={image ? image : "/images/metamask.svg"} className={`w-20 h-20 bg-neutral-200 mb-6 overflow-hidden ${image === null ? "animate-pulse" : ""}`} />
            <p className="text-sm text-neutral-500 pb-3 truncate">{collection}</p>
            <p className="font-medium leading-8 pb-3 truncate">{name}</p>
            <p className="text-sm text-neutral-500">Currently: {parseFloat(floor).toFixed(2)}</p>
        </a>
    );
};

export default Asset;