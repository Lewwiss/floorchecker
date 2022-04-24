import Head from 'next/head';
import { useState } from 'react';
import { fetchFloorArr } from '../util/functions';

import Data from '../components/Data';
import Asset from '../components/Asset';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// 0x148089038088cC49CDcF26e0f96776c25e5CfACd

const Home = () => {
  const [address, setAddress] = useState("");
  const [floorArr, setFloorArr] = useState([]);
  const [total, setTotal] = useState("100");

  async function fetchAllAssets(address) {
    const floorArrRequest = await fetchFloorArr(address, "");
    setFloorArr(floorArrRequest);
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Floor Checker - Find The Total Floors Of Your NFT's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
          floorArr.length > 0 ?
          <Data floorArr={floorArr} />:
          <div className="min-h-screen flex flex-col items-center justify-center">
            <div className="py-40">
              <h1 className="text-center text-6xl font-bold leading-tight">Find The Total <br />Floors Of Your NFT's</h1>
              <div className="mx-auto container max-w-sm flex flex-col justify-center space-y-7 pt-8">
                <input type="text" placeholder="Wallet Address" className="rounded-xl py-5 px-6 outline-none bg-white border" onChange={(e) => setAddress(e.target.value)}/ >
                <button onClick={() => fetchAllAssets(address)} className="rounded-xl duration-300 text-white font-medium py-4 px-7 border-2 border-black bg-black outline-none bg-white">Check Floors</button>
              </div>
            </div>
          </div>
        }
    </div>
  );
};

export default Home;