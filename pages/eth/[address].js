import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchFloorArr } from '../../util/functions';

import Data from '../../components/Data';
import Asset from '../../components/Asset';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

const Home = () => {
  const router = useRouter();
  const { address } = router.query;
  const [floorArr, setFloorArr] = useState([]);
  const [total, setTotal] = useState("100");

  async function fetchAllAssets(address) {
    const floorArrRequest = await fetchFloorArr(address, "");
    setTimeout(() => setFloorArr(floorArrRequest), 1000);
  };

  useEffect(() => {
    if (!address) return;
    fetchAllAssets(address);
  }, [address]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Head>
        <title>Floor Checker - Find The Total Floors Of Your NFT's</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {
        floorArr.length > 0 ?
        <Data floorArr={floorArr} />
        :
        <Loading />
      }
    </div>
  );
};

export default Home;