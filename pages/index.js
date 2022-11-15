import Head from 'next/head';

import Navigation from '../components/Navigation';
import Landing from '../components/Index/Landing';
import About from '../components/Index/About';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Floor Checker - Instantly check the floors of your NFT wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Landing />
      <About />
      <Footer />
    </div>
  );
};

export default Home;