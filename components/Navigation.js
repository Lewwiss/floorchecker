import { useState, useEffect } from 'react';

const Navigation = () => {
    const [top, setTop] = useState(true);
    const [open, setOpen] = useState(false);

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
        <div className={`fixed right-0 left-0 z-50 px-6 3xl:px-0 w-full duration-300 bg-black ${top ? "py-7" : "py-5"}`}>
            <div className="mx-auto container max-w-7xl grid grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-row items-center justify-start">
                    <a href="/" className="hidden lg:flex flex-row items-center justify-start space-x-4">
                        <div className="bg-customgreen h-10 w-10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#000">
                                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                            </svg>
                        </div>
                    </a>
                    <button className="block lg:hidden">
                        <div className="border-white border-2 h-10 w-10 flex items-center justify-center">
                            
                        </div>
                    </button>
                </div>
                <div className="relative flex flex-row items-center justify-end space-x-10">
                    <a href="#" className="text-sm text-white duration-500 hidden lg:block line-through">How it works?</a>
                    <a href="faq" className="text-sm text-white duration-500 hidden lg:block">FAQ</a>
                    <a href="/support" className="text-sm text-white duration-500 hidden lg:block">Support</a>
                    <div className="relative">
                        <button onClick={() => setOpen(!open)} className="text-sm text-white font-semibold py-4 border-2 border-white px-7 bg-black outline-none flex flex-row items-center">
                        Connect wallet
                        </button>
                        <div className={`${open ? "absolute" : "hidden"} bg-white mt-2 w-full`}>
                            <button className="w-full text-sm py-4 border-2 border-white line-through">Metamask</button>
                            <hr className=""/>
                            <button className="w-full text-sm py-4 border-2 border-white line-through">Coinbase</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;