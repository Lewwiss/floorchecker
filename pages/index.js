import Head from 'next/head';
import { useState } from 'react';
import { fetchFloorArr } from '../util/functions';

import Data from '../components/Data';
import Asset from '../components/Asset';
import Navigation from '../components/Navigation';

// 0x148089038088cC49CDcF26e0f96776c25e5CfACd

const Home = () => {

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Floor Checker - Find The Total Floors Of Your NFT's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
        <div>
            <div className="mx-auto container flex flex-row justify-center items-center space-x-6 min-h-screen">
                <a href="/app" className="rounded-xl duration-300 text-white font-medium py-4 px-7 border-2 border-indigo-600 bg-indigo-600 outline-none bg-white">Check Floors</a>
                <a href="/" className="rounded-xl duration-300 text-indigo-600 font-bold py-4 px-7 border-2 border-indigo-200 bg-indigo-200 outline-none bg-white">How it works</a>
            </div>
        </div>
    </div>
  );
};

export default Home;