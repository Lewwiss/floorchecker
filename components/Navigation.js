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
        <div className={`z-50 w-full fixed px-10 duration-300 ${top ? "py-7" : "bg-neutral-900 py-5 drop-shadow-2xl"}`}>
            <div className="grid grid-cols-2">
                <div className="flex flex-row items-center justify-start">
                    <p>Floor Checker</p>
                </div>
                <div className="flex flex-row items-center justify-end">
                    <a href="/download" className="py-3.5 px-6 rounded-full border-white border-2 text-white font-bold text-md hover:bg-white hover:text-neutral-900 hover:scale-95 duration-300">Get the app</a>
                </div>
            </div>
        </div>
    )
};

export default Navigation;