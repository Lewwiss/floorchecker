import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="bg-slate-900">
            <Navigation />
            <div className="min-h-screen w-full flex flex-col items-center justify-center">
                <h1 className="text-9xl font-extrabold text-white">404</h1>
                <p className="text-sm font-medium pb-10 pt-8 text-slate-600">We can't find what you're looking for...</p>
                <a href="/" className="rounded-md duration-300 text-sm text-white font-bold py-4 px-8 bg-primary outline-none flex flex-row duration-300 hover:-translate-y-1">
                    Back to home
                </a>
            </div>
            <Footer />
        </div>
    );
};

export default Home;