const Share = ({ address }) => {
    return (
        <div className="text-center py-4">
            <p className="text-sm font-medium text-white pb-6">Copy link to share</p>
            <button className="flex flex-row text-slate-600 font-medium max-w-2xl text-sm rounded-md py-3.5 px-5 outline-none border border-slate-700 placeholder-slate-600" onClick={() => {navigator.clipboard.writeText(`https://www.floorchecker.io/eth/${address}`)}}>
                <p className="w-64 sm:w-80 lg:w-96 truncate">https://www.floorchecker.io/eth/{address}</p>
                <p className="text-white pl-4">Copy</p>
            </button>
        </div>
    );
};

export default Share;