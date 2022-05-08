import Head from 'next/head';
import Navigation from "../components/Navigation";
import Question from '../components/Question';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-slate-900">
            <Head>
                <title>Floor Checker - FAQ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navigation />
            <div className="min-h-screen pt-52 px-6">
                <h1 className="text-5xl text-white text-center font-extrabold">Questions? Look here</h1>
                <p className="pt-11 text-sm text-slate-600 text-center">Can't find an answer? Contact us at <a className="underline" href="mailto:contact@floorchecker.io">contact@floorchecker.io</a></p>
                <div className="mx-auto container max-w-4xl pt-24 flex flex-col space-y-6">
                    <Question question="Test question" answer="This is a test answer" />
                    <hr className="border-slate-700" />
                    <Question question="Test question" answer="This is a test answer" />
                    <hr className="border-slate-700" />
                    <Question question="Test question" answer="This is a test answer" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;