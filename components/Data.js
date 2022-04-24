import Asset from "./Asset";

const Data = ({floorArr}) => {
    return (
        <div className="mx-auto container flex flex-col justify-center items-center py-40">
            <a href="/app" className="rounded-xl duration-300 text-white font-medium py-4 px-7 border-2 border-black bg-black outline-none bg-white">Check Another Wallet</a>
            <p className="pt-12 text-sm text-neutral-500">0x148089038088cC49CDcF26e0f96776c25e5CfACd</p>
            <p className="text-4xl font-bold pt-5">Total: 244</p>
            {
                floorArr.length > 0 ?
                <div className="mx-auto max-w-2xl w-full flex flex-col space-y-5 pt-8">
                {
                    floorArr.map((element) => {
                    return (<Asset {...element} key={element.id} />)
                    })
                }
                </div>:
                null
            }
        </div>
    );
};

export default Data;