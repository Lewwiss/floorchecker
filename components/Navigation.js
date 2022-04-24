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
        <div className={`z-50 w-full fixed px-10 duration-300 ${top ? "py-7" : "bg-white py-5 drop-shadow-2xl"}`}>
            <div className="grid grid-cols-2">
                <div className="flex flex-row items-center justify-start">
                    <p>Floor Checker</p>
                </div>
                <div className="flex flex-row items-center justify-end">
                    <a href="/app" className="rounded-xl duration-300 text-white font-medium py-4 px-7 border-2 border-black bg-black outline-none bg-white">Check My Wallet</a>
                </div>
            </div>
        </div>
    )
};

export default Navigation;