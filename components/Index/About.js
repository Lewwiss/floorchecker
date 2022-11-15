const About = () => {
    return (
        <div className="border-y-2 border-dashed px-6 xl:px-0">
            <div className="mx-auto container max-w-6xl grid grid-cols-2 gap-10 py-32 bg-red-50">
                <div className="flex flex-col items-start justify-center bg-red-100">
                    <h1 className="font-semibold text-5xl leading-relaxed max-w-md">Easily check your wallets worth</h1>
                    <p className="text-md leading-9 pt-5 max-w-sm">The fastest and most efficient method to estimating the value of your NFT's.</p>
                </div>
                <div className="flex items-center justify-end">
                    
                </div>
            </div>
            <div className="mx-auto container max-w-6xl grid grid-cols-2 gap-10 py-32 bg-green-50">
                <div className="flex items-center justify-start">
                    
                </div>
                <div className="flex flex-col items-start justify-center bg-green-100">
                    <h1 className="font-semibold text-5xl leading-relaxed max-w-md">Supports multiple blockchains</h1>
                    <p className="text-md leading-9 pt-5 max-w-sm">Our current version provides support for both Ethereum and Solana NFT's.</p>
                </div>
            </div>
        </div>
    );
};

export default About;