import Head from 'next/head';
import { useState } from 'react';
import { fetchFloorArr } from '../util/functions';

import Navigation from '../components/Navigation';

import Footer from '../components/Footer';

const Home = () => {
  const [floorArr, setFloorArr] = useState([]);

  async function fetchAllAssets() {
    const floorArrRequest = await fetchFloorArr("0x148089038088cC49CDcF26e0f96776c25e5CfACd", "");
    setFloorArr(floorArrRequest);
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Floor Checker - Find The Total Floors Of Your Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen mx-auto container max-w-sm h-10 flex flex-col justify-center space-y-6">
        <input type="text" placeholder="Wallet Address" className="text-md rounded-full py-5 px-7 outline-none bg-white border" />
        <button onClick={() => fetchAllAssets()} className="text-md text-white font-bold rounded-full py-5 px-7 bg-indigo-600 outline-none bg-white">Find Floors</button>
      </div>
    </div>
  );
};

export default Home;