import Head from 'next/head';
import { useState } from 'react';
import { fetchFloorArr } from '../util/functions';

import Data from '../components/Data';
import Asset from '../components/Asset';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  const [address, setAddress] = useState("0x148089038088cC49CDcF26e0f96776c25e5CfACd");
  const [floorArr, setFloorArr] = useState([]);
  const [total, setTotal] = useState("100");

  async function fetchAllAssets(address) {
    const floorArrRequest = await fetchFloorArr(address, "");
    setFloorArr(floorArrRequest);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Head>
        <title>Floor Checker - Find The Floors Of Your NFTs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {
          floorArr.length > 0 ?
          <Data floorArr={floorArr} />:
          <div className="min-h-screen mx-auto container max-w-7xl flex flex-col items-start justify-center">
            <h1 className="text-6xl font-extrabold leading-normal text-white">Find The Floors <br />Of Your NFTs</h1>
            <div className="pt-10 w-full max-w-2xl flex flex-row justify-center space-x-6">
              <input type="text" placeholder="Wallet Address" className="text-white font-medium w-full text-sm rounded-md py-3.5 px-5 outline-none bg-slate-800 border border-slate-700 placeholder-slate-600 focus:border-primary focus:border-2 duration-200" onChange={(e) => setAddress(e.target.value)}/ >
              <button onClick={() => fetchAllAssets(address)} className="rounded-md duration-300 text-sm text-white font-bold py-4 px-12 bg-primary outline-none">Check</button>
            </div>
          </div>
        }
    </div>
  );
};

export default Home;