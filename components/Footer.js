const Footer = () => {
    return (
        <div className="bg-slate-800 border-slate-700 border-t px-6 3xl:px-0">
            <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 py-14">
                <div className="flex flex-row items-center justify-center md:justify-start order-2 md:order-1 pt-10 md:pt-0">
                    <p className="text-slate-600 font-medium text-sm leading-loose">© 2022 FloorChecker.io, All rights reserved.</p>
                </div>
                <div className="flex flex-row items-center justify-center md:justify-end order-1 md:order-2">
                    <p className="text-slate-600 font-medium text-sm">Socials here</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;