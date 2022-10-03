import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import About from '../components/About';
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
    <div className="min-h-screen bg-black">
      <Head>
        <title>Floor Checker: Check the total floors of your NFT wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <div className="mx-auto container max-w-7xl">
        <div className="flex flex-col items-center justify-center px-6 2xl:px-0 2xl:pt-56">
          <h1 className="text-6xl font-bold leading-normal text-white text-center">Check the <span className="text-customgreen underline underline-offset-8 decoration-dashed">total floors</span><br />of your NFT wallet.</h1>
          <p className="text-white max-w-lg text-md text-center leading-9 pt-7 pb-5">Floor Checker allows you to calculate your NFT portfolio within a few clicks, we currently have support for both Ethereum and Solana.</p>
          <div className="relative pt-8 w-full max-w-xl flex flex-row justify-center space-x-4">
            <input type="text" placeholder="Wallet Address" className={`w-full text-sm py-4 px-5 outline-none text-white placeholder-neutral-400 bg-black duration-200 ${errors.length > 0 ? "border-2 border-rose-500" : "border-2 border-white focus:border-customgreen"}`} onChange={(e) => setAddress(e.target.value)}/ >
            <button onClick={() => sendForm()} className="text-sm text-black font-semibold py-3 border-2 border-customgreen px-8 bg-customgreen outline-none flex flex-row items-center">
              Check
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000" className="w-6 ml-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </button>
            {
              errors.length > 0 ?
              <p className="absolute -bottom-14 -left-4 text-sm text-white bg-rose-500 font-medium px-4 py-2.5">Error: {errors}</p>
              :
              null
            }
          </div>
          <div className="max-w-6xl mx-auto h-96 w-full bg-gradient-to-t from-black to-white mt-24 opacity-10" />
          {/*<img className="max-w-7xl mx-auto w-full mt-24" src="/images/showcase.png" />*/}
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default Home;