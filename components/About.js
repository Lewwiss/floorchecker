const About = () => {
    return (
        <div className="pt-10">
            {/*<div className="mx-auto container max-w-5xl bg-emerald-500 py-20">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-white font-semibold text-4xl leading-normal text-center pb-10">Working with</h1>
                    <div className="w-full h-32 bg-white" />
                </div>
            </div>*/}
            <div className="mx-auto container max-w-4xl grid grid-cols-2 gap-10 py-28">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-white font-semibold text-5xl leading-normal max-w-md">Easiest way to calculate your wallets worth</h1>
                    <p className="text-md text-white leading-9 pt-5 max-w-sm">Our current version supports both Ethereum and Solana NFT's through the OpenSea API.</p>
                </div>
                <div className="flex items-center justify-end">
                    <div className="w-80 h-80 bg-white opacity-10" />
                </div>
            </div>
            <div className="mx-auto container max-w-4xl grid grid-cols-2 gap-10 py-28">
                <div className="flex items-center justify-start">
                    <div className="w-80 h-80 bg-white opacity-10" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-white font-semibold text-5xl leading-normal max-w-md">Our platform works for multiple blockchains</h1>
                    <p className="text-md text-white leading-9 pt-5 max-w-sm">Our current version supports both Ethereum and Solana NFT's through the OpenSea API.</p>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {/*<div className="mx-auto container max-w-5xl bg-emerald-500 py-20">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-white font-semibold text-4xl leading-normal text-center pb-10">Working with</h1>
                    <div className="w-full h-32 bg-white" />
                </div>
            </div>*/}
            <div className="mx-auto container max-w-5xl grid grid-cols-2 gap-10 py-28">
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-white font-semibold text-4xl leading-normal max-w-md">Easiest way to calculate your wallets worth</h1>
                    <p className="text-sm text-white leading-9 pt-5 max-w-md">Our current version supports both Ethereum and Solana NFT's through the OpenSea API.</p>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-80 h-80 bg-white" />
                </div>
            </div>
            <div className="mx-auto container max-w-5xl grid grid-cols-2 gap-10 py-28">
                <div className="flex items-center justify-center">
                    <div className="w-80 h-80 bg-white" />
                </div>
                <div className="flex flex-col items-start justify-center">
                    <h1 className="text-white font-semibold text-4xl leading-normal max-w-md">Our playform works for multiple blockchains</h1>
                    <p className="text-sm text-white leading-9 pt-5 max-w-md">Our current version supports both Ethereum and Solana NFT's through the OpenSea API.</p>
                </div>
            </div>
        </div>
    );
};

export default About;