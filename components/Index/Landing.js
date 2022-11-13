import Form from "./Form";

const Landing = () => {
    return (
        <div className="mx-auto container flex flex-col items-center justify-center py-48 px-10">
            <h1 className="text-6xl font-bold leading-relaxed text-center">Instantly check the <span className="text-primary underline underline-offset-8 decoration-dashed">floors</span><br className="hidden xl:block"/> of your NFT wallet.</h1>
            <p className="max-w-lg text-md leading-8 text-center pt-6 pb-10">Calculate the value of your NFT portfolio quickly & simply.</p>
            <Form />
            {/* <div className="max-w-6xl mx-auto h-96 w-full bg-gradient-to-t from-black to-white mt-24 opacity-10" /> */}
        </div>
    );
};

export default Landing;