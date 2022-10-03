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
    }, []);

    return (
        <div className="mx-auto container flex flex-col justify-center items-center pt-28 pb-10 px-6 3xl:px-0">
            <p className="text-sm text-neutral-400 pt-16">ETH {">"} 0x148089038088cC49CDcF26e0f96776c25e5CfACd</p>
            <p className="text-5xl font-extrabold text-white pt-14 pb-10">Total: {total}</p>
            <div className="pb-8">
                <Share address={address} />
            </div>
            <div className="pb-16">
                <a href="/" className="text-sm text-black font-semibold py-4 border-2 border-customgreen px-8 bg-customgreen outline-none flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 mr-2 rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    Try another wallet
                </a>
            </div>
            {
                floorArr.length > 0 ?
                <div className="mx-auto max-w-2xl w-full flex flex-col space-y-10 bg-black border-white border-2 p-12">
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