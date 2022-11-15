const About = () => {
    return (
        <div className="bg-neutral-100 pt-10 border-t-2 border-dashed">
            <div className="mx-auto container max-w-6xl grid grid-cols-2 gap-10 py-28">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="font-semibold text-5xl leading-normal max-w-md">Easily calculate your wallets worth</h1>
                    <p className="text-md leading-9 pt-5 max-w-sm">The fastest and most efficient method to estimating the value of your NFT's.</p>
                </div>
                <div className="flex items-center justify-end">
                    <div className="w-80 h-80 bg-white opacity-10 bg-gradient-to-l from-black to-white" />
                </div>
            </div>
            <div className="mx-auto container max-w-4xl grid grid-cols-2 gap-10 py-28">
                <div className="flex items-center justify-start">
                    <div className="w-80 h-80 bg-white opacity-10 bg-gradient-to-r from-black to-white" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-white font-semibold text-5xl leading-normal max-w-md">Our platform works for multiple blockchains</h1>
                    <p className="text-md text-white leading-9 pt-5 max-w-sm">Our current version supports both Ethereum and Solana NFT's through the OpenSea API.</p>
                </div>
            </div>
        </div>
    );
};

export default About;