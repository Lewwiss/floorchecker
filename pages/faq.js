import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="bg-black">
            <Navigation />
            <div className="min-h-screen w-full flex flex-col items-center justify-center">
                <h1 className="text-7xl font-extrabold text-white">Come back soon.</h1>
                <p className="text-white max-w-lg text-md text-center leading-9 pt-6 pb-8">This page is still under construction.</p>
                <a href="/" className="text-sm text-white font-semibold py-4 border-2 border-white px-8 bg-black outline-none flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 mr-2 rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                    Back to home
                </a>
            </div>
            <Footer />
        </div>
    );
};

export default Home;