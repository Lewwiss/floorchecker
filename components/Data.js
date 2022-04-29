import { useState, useEffect } from 'react';
import Asset from "./Asset";
import Share from './Share';

const Data = ({ floorArr, address }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (!floorArr) return;
        let newTotal = 0;
        floorArr.forEach((element) => {
            newTotal += parseFloat(element.floor)
        });
        setTotal(parseFloat(newTotal).toFixed(2));
    }, [floorArr]);

    return (
        <div className="mx-auto container flex flex-col justify-center items-center pt-32 pb-20 px-6 3xl:px-0">
            <p className="text-sm font-medium text-slate-600 pt-12">0x148089038088cC49CDcF26e0f96776c25e5CfACd</p>
            <p className="text-4xl font-extrabold text-white pt-8 pb-10">Total: {total} Ξ</p>
            <div className="pb-12">
                <Share address={address} />
            </div>
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