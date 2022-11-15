import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { solanaFloors } from '../../util/solana';

import Navigation from '../../components/Navigation';
import Total from '../../components/Data/Total';
import Data from '../../components/Data/Data';
import Footer from '../../components/Footer';

const Home = () => {
    const router = useRouter();
    const { address } = router.query;
    const [response, setResponse] = useState({ success: false, total: 0, assets: [] });

    async function getSolanaFloors() {
        const getSolanaFloorsRequest = await solanaFloors(address);
        setResponse(getSolanaFloorsRequest);
    };

    useEffect(() => {
        if (!address ||address === null || address === "") return;
        getSolanaFloors();
    }, [address]);

    return (
        <div>
            <Head>
                <title>Solana Wallet Summary - Floor Checker</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <Total blockchain="Solana" address={address} total={response.total} />
            {
                response.success ? <Data assets={response.assets} /> : <Data assets={[]} />
            }
            <Footer />
        </div>
    );
};

export default Home;