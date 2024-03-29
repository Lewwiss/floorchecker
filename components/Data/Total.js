import Share from "./Share";

const Total = ({ blockchain, address, total }) => {
    function blockchainSymbol() {
        if (blockchain === "Ethereum") return "Ethereum";
        if (blockchain === "Solana") return "Solana";
    };

    if (!total) return (
        <div className="mx-auto max-w-xl w-full pt-40 text-center px-6 2xl:px-0">
            <p className="truncate text-sm text-neutral-500">{blockchain + " > " + address}</p>
            <p className="text-5xl font-extrabold my-12 bg-neutral-200 animate-pulse h-12" />
            <Share blockchain={blockchain} address={address} />
        </div>
    );

    return (
        <div className="mx-auto max-w-xl w-full pt-40 text-center px-6 2xl:px-0">
            <p className="truncate text-sm text-neutral-500">{blockchain + " > " + address}</p>
            <p className="text-5xl font-extrabold py-12">Total: {total} {blockchainSymbol()}</p>
            <Share blockchain={blockchain} address={address} />
        </div>
    );
};

export default Total;