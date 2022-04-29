import { useState, useEffect } from 'react';

const Navigation = ({selected}) => {
    const [top, setTop] = useState(true);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset === 0) {
                setTop(true);
            } else {
                setTop(false);
            };
        });
    });

    return (
        <div className={`fixed right-0 left-0 z-50 w-full bg-slate-900 duration-300 ${top ? "py-7" : "py-5"}`}>
            <div className="mx-auto container grid grid-cols-2">
                <div className="flex flex-row items-center justify-start space-x-5">
                    <div className="bg-slate-700 h-10 w-10 rounded-md" />
                    <p className="font-bold text-white text-lg">FloorChecker.io</p>
                </div>
                <div className="flex flex-row items-center justify-end">
                    <a href="/app" className="rounded-md duration-300 text-sm text-white font-bold py-4 px-7 bg-primary outline-none flex flex-row">
                        Connect wallet
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Navigation;