import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Home = () => {
  const router = useRouter();
  const [address, setAddress] = useState("");
  const [errors, setErrors] = useState("");

  function sendForm() {
    // 0x148089038088cC49CDcF26e0f96776c25e5CfACd
    setErrors("");
    if (address.length <= 0) return setErrors("No address submitted");
    if (!/^0x[a-fA-F0-9]{40}$/.test(address)) return setErrors("Address doesn't match regex");
    router.push(`/eth/${address}`);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <Head>
        <title>Floor Checker - Find The Floors Of Your NFTs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="mx-auto container max-w-7xl grid grid-cols-2">
        <div className="min-h-screen flex flex-col items-start justify-center px-6 3xl:px-0">
          <h1 className="text-6xl font-extrabold leading-normal text-white">Find The Floors <br />Of Your NFTs</h1>
          <div className="relative pt-10 w-full max-w-2xl flex flex-row justify-center space-x-6">
            <input type="text" placeholder="Wallet Address" className={`text-white font-medium w-full text-sm rounded-md py-3.5 px-5 outline-none bg-slate-800 placeholder-slate-600 ${errors.length > 0 ? "border border-rose-500" : "border border-slate-700"}`} onChange={(e) => setAddress(e.target.value)}/ >
            <button onClick={() => sendForm()} className="rounded-md text-sm text-white font-bold py-4 px-12 bg-primary outline-none duration-300 hover:-translate-y-1">Check</button>
            {
              errors.length > 0 ?
              <p className="absolute -bottom-14 -left-6 text-sm bg-rose-500 font-bold text-slate-900 px-4 py-2.5 rounded-md">Error: {errors}</p>
              :
              null
            }
          </div>
        </div>
        <div className="flex items-center justify-center bg-slate-800">
            
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;