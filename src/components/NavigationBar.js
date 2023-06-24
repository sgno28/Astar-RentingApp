import React from "react";
import Logo from "../assets/Logo_only.png";
import { useWallet } from "../walletContext";

const NavigationBar = () => {
  const { wallet, connecting, connect, disconnect, ethersProvider } = useWallet();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center ">
            <a href="/" className="text-white text-lg font-semibold">
              <div className="flex justify-center items-center">
                <p className="text-lg">Blocasa</p>
                <img src={Logo} alt="Logo" className="w-14 h-14 mr-5 -ml-4" />
              </div>
            </a>
          </div>

          <div className="flex">
            <div className="hidden sm:flex sm:items-center">
              <a
                href="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex items-center">
            <button
              disabled={connecting}
              onClick={() => (wallet ? disconnect(wallet) : connect())}
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              {connecting ? "connecting" : wallet ? "disconnect" : "connect"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
