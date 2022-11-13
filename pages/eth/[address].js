import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ethereumFloors } from '../../util/ethereum';

import Navigation from '../../components/Navigation';
import Total from '../../components/Data/Total';
import Data from '../../components/Data/Data';
import Footer from '../../components/Footer';

const Home = () => {
    const router = useRouter();
    const { address } = router.query;
    const [response, setResponse] = useState({ success: false, total: 0, assets: [] });

    async function getEthereumFloors() {
        const getEthereumFloorsRequest = await ethereumFloors(address);
        setResponse(getEthereumFloorsRequest);
    };

    useEffect(() => {
        if (!address ||address === null || address === "") return;
        getEthereumFloors();
    }, [address]);

    console.log(response)

    return (
        <div>
            <Head>
                <title>Ethereum Wallet Summary - Floor Checker</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <Total blockchain="Ethereum" address={address} total={response.total} />
            {
                response.success ? <Data assets={response.assets} /> : <p>no</p>
            }
            <Footer />
        </div>
    );
};

export default Home;