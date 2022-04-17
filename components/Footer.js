const Footer = () => {
    return (
        <div className="bg-white border-t">
            <div className="mx-auto container grid grid-cols-9 py-16 px-6">
                <div className="col-span-5">
                    <a href="#" className="font-bold text-md text-white">© 2022 Podlist</a>
                </div>
                <div className="col-span-2 flex flex-col space-y-8">
                    <a href="/" className="font-medium text-md text-white">Browse</a>
                    <a href="/about" className="font-medium text-md text-white">About</a>
                    <a href="/newsletter" className="font-medium text-md text-white">Newsletter</a>
                </div>
                <div className="col-span-2 flex flex-col space-y-8">
                    <a href="/add" className="font-medium text-md text-white">Add a podcast</a>
                    <a href="/support" className="font-medium text-md text-white">Support</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;