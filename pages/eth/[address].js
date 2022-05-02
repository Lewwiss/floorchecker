import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { fetchFloorArr } from '../../util/functions';

import Data from '../../components/Data';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

const Home = () => {
  const router = useRouter();
  const { address } = router.query;
  const [floorArr, setFloorArr] = useState({success: null, floorArr: []});

  async function fetchAllAssets(address) {
    const floorArrRequest = await fetchFloorArr(address);
    setTimeout(() => setFloorArr(floorArrRequest), 1000);
  };

  useEffect(() => {
    if (!address) return;
    fetchAllAssets(address);
  }, [address]);

  function getElements(data) {
    switch(data.success) {
      case false:
        router.push("/");
        return;
      case true:
        return <Data floorArr={floorArr.floorArr} address={address} />;
      default:
        return <Loading />;
    };
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Head>
        <title>Floor Checker - Wallet Summary</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      {
        getElements(floorArr)
      }
      <Footer />
    </div>
  );
};

export default Home;