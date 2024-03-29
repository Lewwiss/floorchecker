import Asset from "./Asset";

const Data = ({ assets }) => {
    return (
        <div className="bg-neutral-100 border-y-2 border-dashed mt-16">
            {
                assets.length > 0 ?
                <div className="mx-auto container max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-16 2xl:px-0">
                {
                    assets.map((element) => {
                        return (<Asset {...element} key={Math.random()} />)
                    })
                }
                </div>
                :
                <div className="mx-auto container max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 py-16 2xl:px-0">
                    <Asset key={Math.random()} />
                    <Asset key={Math.random()} />
                    <Asset key={Math.random()} />
                    <Asset key={Math.random()} />
                </div>
            }
        </div>
    );
};

export default Data;