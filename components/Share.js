import { useState } from "react";

const Share = ({ address }) => {
    const [copied, setCopied] = useState(false);

    function copiedClicked() {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1000);
    };

    return (
        <div className="relative text-center py-4">
            <p className="text-sm font-medium text-white pb-6">Copy link to share</p>
            <div className="flex flex-row text-sm py-4 px-5 outline-none border-2 border-white hover:border-customgreen duration-200" onClick={() => {navigator.clipboard.writeText(`https://www.floorchecker.io/eth/${address}`)}}>
                <p className="w-64 sm:w-80 lg:w-80 truncate text-white">https://www.floorchecker.io/eth/{address}</p>
                <button className="w-9 text-sm font-medium text-white pl-4" onClick={() => copiedClicked()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="#fff" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z" />
                    </svg>
                </button>
            </div>
        </div>
    );

    return (
        <div className="relative text-center py-4">
            <p className="text-sm font-medium text-white pb-6">Copy link to share</p>
            <div className="flex flex-row text-sm py-4 px-5 outline-none border-2 border-white hover:border-customgreen duration-200" onClick={() => {navigator.clipboard.writeText(`https://www.floorchecker.io/eth/${address}`)}}>
                <p className="w-64 sm:w-80 lg:w-80 truncate text-white">https://www.floorchecker.io/eth/{address}</p>
                <button className="w-12 text-sm font-medium text-white pl-4" onClick={() => copiedClicked()}></button>
            </div>
        </div>
    );
};

export default Share;