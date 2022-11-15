import { useState, useEffect } from 'react';

const Navigation = () => {
    const [top, setTop] = useState(true);
    const [open, setOpen] = useState(false);

    function scrollEventListener() {
        if (window.pageYOffset === 0) setTop(true);
        else setTop(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollEventListener);
        return () => {
            window.removeEventListener("scroll", scrollEventListener);
        };
    }, []);
    
    return (
        <div className={`fixed right-0 left-0 z-50 px-6 2xl:px-0 w-full duration-300 ${top ? "py-7 bg-transparent" : "py-5 bg-white"}`}>
            <div className="mx-auto container max-w-7xl grid grid-cols-2 lg:grid-cols-2">
                <div className="flex flex-row items-center justify-start">
                    <a href="/" className="hidden lg:flex flex-row items-center justify-start space-x-4">
                        <div className="bg-black h-10 w-10 flex items-center justify-center">
                            
                        </div>
                    </a>
                    <button className="block lg:hidden">
                        <div className="bg-white h-10 w-10 flex items-center justify-center">
                            
                        </div>
                    </button>
                </div>
                <div className="relative flex flex-row items-center justify-end space-x-10">
                    <div className="relative">
                        <button onClick={() => setOpen(!open)} className="text-sm text-white font-semibold py-4.5 px-8 bg-primary outline-none flex flex-row items-center duration-200 hover:scale-105 hover:-rotate-1">
                            Connect wallet
                        </button>
                        <div className={`${open ? "absolute" : "hidden"} bg-white border-2 border-dashed mt-2 w-full`}>
                            <button className="w-full text-sm py-4 border-2 border-white">Metamask</button>
                            <div className="border-b-2 border-dashed"/>
                            <button className="w-full text-sm py-4 border-2 border-white">Phantom</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;