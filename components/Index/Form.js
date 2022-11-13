import { useRouter } from "next/router";
import { useState } from "react";

const Form = () => {
    const router = useRouter();
    const [address, setAddress] = useState("");
    const [blockchain, setBlockchain] = useState("Ethereum");
    const [errors, setErrors] = useState("");

    function forwardToEthereum() {
        setErrors("");
        if (address.length <= 0) return setErrors("No address submitted");
        if (!/^0x[a-fA-F0-9]{40}$/.test(address)) return setErrors("Address doesn't match regex");
        router.push(`/eth/${address}`);
    };

    function forwardToSolana() {
        setErrors("");
        if (address.length <= 0) return setErrors("No address submitted");
        // Validate Solana Address
        router.push(`/sol/${address}`);
    };

    function submitAddress() {
        if (blockchain === "Solana") forwardToSolana();
        if (blockchain === "Ethereum") forwardToEthereum();
    };

    return (
        <div className="max-w-xl w-full">
            <div className="relative w-full">
                <select type="text" defaultValue="Ethereum" className="w-full text-sm py-4 px-5 outline-none border-2 border-dashed duration-200 appearance-none" onChange={(e) => {setBlockchain(e.target.value); setErrors(""); setAddress("");}}>
                    <option value="Ethereum">Ethereum</option>
                    <option value="Solana">Solana</option>
                </select>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 absolute right-5 top-4.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                </svg>
            </div>
            <div className="relative w-full flex flex-row justify-center space-x-5 pt-5">
                <input type="text" placeholder="Wallet Address" value={address} className={`w-full text-sm py-4 px-5 outline-none border-2 border-dashed duration-200 ${errors.length > 0 ? "border-rose-600" : "focus:border-primary"}`} onChange={(e) => setAddress(e.target.value)} />
                <button onClick={() => submitAddress()} className="text-sm text-white font-semibold py-3.5 px-8 bg-primary outline-none flex flex-row items-center">
                    Check
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#fff" className="w-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </button>
                {
                    !errors.length > 0 ? null :
                    <p className="absolute -bottom-14 -left-5 text-sm text-white bg-rose-600 font-medium px-4 py-2.5">Error: {errors}</p>
                }
            </div>
        </div>
    );
};

export default Form;