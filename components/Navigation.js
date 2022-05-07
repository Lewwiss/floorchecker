import { useState, useEffect } from 'react';

const Navigation = () => {
    const [top, setTop] = useState(true);

    function scrollEventListener() {
        if (window.pageYOffset === 0) {
            setTop(true);
        } else {
            setTop(false);
        };
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollEventListener);

        return () => {
            window.removeEventListener("scroll", scrollEventListener);
        };
    }, []);

    return (
        <div className={`fixed right-0 left-0 z-50 px-6 3xl:px-0 w-full duration-300 bg-slate-900 ${top ? "py-7" : "py-5"}`}>
            <div className="mx-auto container grid grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-row items-center justify-start">
                    <a href="/" className="hidden lg:flex flex-row items-center justify-start space-x-4">
                        <div className="bg-primary h-8 w-8 rounded-md flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                        </div>
                        <p className="font-bold text-white text-lg">FloorChecker.io</p>
                    </a>
                    <button className="block lg:hidden">
                        <div className="bg-slate-700 h-9 w-9 rounded-md flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div className="hidden lg:flex flex-row items-center justify-center space-x-12">
                    <a href="/" className="text-sm font-medium text-slate-600 hover:text-white duration-500">How it works?</a>
                    <a href="/" className="text-sm font-medium text-slate-600 hover:text-white duration-500">FAQ</a>
                    <a href="https://discord.gg/qrmZgCx4n3" target="_blank" className="text-sm font-medium text-slate-600 hover:text-white duration-500">Support</a>
                </div>
                <div className="relative flex flex-row items-center justify-end">
                    <a href="#" className="rounded-md text-sm text-white font-bold py-4 px-8 bg-slate-700 outline-none line-through">
                        Connect wallet
                    </a>
                    {/*<div className="absolute bg-white rounded-md -bottom-36">
                        <button className="py-5 px-14 text-sm">Metamask</button>
                        <hr className=""/>
                        <button className="py-5 px-14 text-sm">Coinbase</button>
                    </div>*/}
                </div>
            </div>
        </div>
    )
};

export default Navigation;