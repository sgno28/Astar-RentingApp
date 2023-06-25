import React from "react";
import { db } from "../firebase";
import { doc, getDoc, updateDoc, arrayRemove } from "firebase/firestore";

const style = {
  card: "w-120 p-2 border border-gray-300 rounded shadow-md bg-white mt-10",
  buttonaccept:
    "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full",
  buttonpass:
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-2",
};
/* eslint-disable */
const acceptbutton = async (address) => {
  const documentRef = doc(
    db,
    "property",
    "0x27ae56292901cABd2E86fcD8855a132EdE297638"
  );
  await updateDoc(documentRef, {
    taken: true,
    taken_address: address,
  });
  const docsnap = await getDoc(documentRef);
  const rent_data = docsnap.getData();
  const smart_contract_data = {
    landlord: "0x27ae56292901cABd2E86fcD8855a132EdE297638",
    renter: rent_data.taken_address,
    rent: rent_data.rent,
    duration: rent_data.duration,
    image: "insert here",
  };
};

const removebutton = async (address) => {
  const documentRef = doc(
    db,
    "property",
    "0x27ae56292901cABd2E86fcD8855a132EdE297638"
  );
  await updateDoc(documentRef, {
    potential: arrayRemove(address),
  });
};

const MatchCard = ({ match }) => {
  return (
    <div className={style.card}>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">{match}</p>
      </div>
      <div className="px-6 py-4">
        <button
          onClick={() => {
            acceptbutton(match);
          }}
          className={style.buttonaccept}
        >
          Accept
        </button>
        <button
          onClick={() => {
            removebutton(match);
          }}
          className={style.buttonpass}
        >
          Pass
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
