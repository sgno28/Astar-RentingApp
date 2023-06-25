import React from "react";
import NavigationBar from "../components/NavigationBar";
import { Smile, X } from "react-feather";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import apartimg from "../assets/apart.jpg";

const style = {
  maindiv: "flex flex-col items-center h-screen bg-gray-800 ",
  card: "w-64 p-4 border border-gray-300 rounded shadow-md bg-white mt-10",
  image: "mt-8 w-64 h-64 rounded-full",
  button1: "px-4 py-2 bg-green-500 text-white rounded cursor-pointer mr-2",
  button2: "px-4 py-2 bg-red-500 text-white rounded cursor-pointer",
};
/* eslint-disable */
const swipeon = async (address) => {
  const documentRef = doc(
    db,
    "property",
    "0x27ae56292901cABd2E86fcD8855a132EdE297638"
  );
  address;
  await updateDoc(documentRef, {
    potential: arrayUnion(address),
  });
};

const TenantSwipe = () => {
  const address = "0xE36075e712150909E67C628cb2c002aE0fb9EB74 ";
  return (
    <>
      <NavigationBar />
      <div className={style.maindiv}>
        <div className={style.card}>
          <img className="w-full rounded" src={apartimg} alt="Profile" />
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Rent Cost:</h3>
            <p>$1,000/week</p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Lease time:</h3>
            <p>12 months</p>
          </div>
        </div>
        <div className="flex mt-4">
          <button className={style.button1} onClick={() => swipeon(address)}>
            <Smile />
          </button>
          <button className={style.button2}>
            <X />
          </button>
        </div>
      </div>
    </>
  );
};

export default TenantSwipe;
