import Asset from "./Asset";

const Data = ({ floorArr }) => {
    return (
        <div className="mx-auto container flex flex-col justify-center items-center pt-36 pb-20">
            <a href="/app" className="rounded-md duration-300 text-sm text-white font-bold py-4 px-12 bg-primary outline-none">Check another</a>
            <p className="text-sm font-medium text-slate-500 pt-12">0x148089038088cC49CDcF26e0f96776c25e5CfACd</p>
            <p className="text-4xl font-extrabold text-white pt-8 pb-12">Total: 244</p>
            {
                floorArr.length > 0 ?
                <div className="mx-auto max-w-2xl w-full flex flex-col space-y-10 bg-slate-800 border-slate-700 border rounded-md p-12">
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