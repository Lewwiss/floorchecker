import Head from 'next/head';
import { useState } from 'react';
import { fetchFloorArr } from '../util/functions';

import Data from '../components/Data';
import Asset from '../components/Asset';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

// 0x148089038088cC49CDcF26e0f96776c25e5CfACd

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
        <title>Floor Checker - Find The Total Floors Of Your NFT's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Loading />
    </div>
  );
};

export default Home;