import Head from 'next/head';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

// 0x148089038088cC49CDcF26e0f96776c25e5CfACd

const Home = () => {
  const [address, setAddress] = useState("");

  return (
    <div className="min-h-screen bg-slate-900">
      <Head>
        <title>Floor Checker - Find The Floors Of Your NFTs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="min-h-screen mx-auto container max-w-7xl flex flex-col items-start justify-center px-6 3xl:px-0">
        <h1 className="text-6xl font-extrabold leading-normal text-white">Find The Floors <br />Of Your NFTs</h1>
        <div className="pt-10 w-full max-w-2xl flex flex-row justify-center space-x-6">
          <input type="text" placeholder="Wallet Address" className="text-white font-medium w-full text-sm rounded-md py-3.5 px-5 outline-none bg-slate-800 border border-slate-700 placeholder-slate-600" onChange={(e) => setAddress(e.target.value)}/ >
          <a href={`/eth/${address}`} className="rounded-md text-sm text-white font-bold py-4 px-12 bg-primary outline-none duration-300 hover:-translate-y-1">Check</a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;