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
            <div className="flex flex-row text-slate-600 font-medium max-w-2xl text-sm rounded-md py-3.5 px-5 outline-none border border-slate-700 placeholder-slate-600" onClick={() => {navigator.clipboard.writeText(`https://www.floorchecker.io/eth/${address}`)}}>
                <p className="w-64 sm:w-80 lg:w-96 truncate">https://www.floorchecker.io/eth/{address}</p>
                {
                    copied ?
                    <div className="w-12 flex justify-end pr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#fff">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                    </div>
                    :
                    <button className="w-12 text-white pl-4" onClick={() => copiedClicked()}>Copy</button>
                }
            </div>
        </div>
    );
};

export default Share;