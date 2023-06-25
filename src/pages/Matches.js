import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import MatchCard from "../components/MatchCard";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const style = {
  maindiv: "bg-gray-100 h-screen",
  card: "max-w-md p-8 bg-white rounded shadow",
  h2: "text-2xl font-bold mb-4",
  label: "block text-gray-700 font-semibold mb-2",
  input:
    "w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500",
  button:
    "w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
};

const Matches = () => {
  const landlord_address = "0x27ae56292901cABd2E86fcD8855a132EdE297638";
  const [matches, setmatches] = useState([]);
  const [render_cards, set_render_cards] = useState(true);
  useEffect(() => {
    const getItems = async (landlord_address) => {
      const docRef = doc(db, "property", landlord_address);
      const docSnap = await getDoc(docRef);
      const matches = docSnap.data();
      if (matches.taken == true) {
        set_render_cards(false);
      } else {
        setmatches(matches.potential);
      }
    };
    getItems(landlord_address);
  }, []);

  // const matches = [
  //   {
  //     name: "John Doe",
  //     image: "john-doe.jpg",
  //     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //   },
  //   {
  //     name: "Jane Smith",
  //     image: "jane-smith.jpg",
  //     bio: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  //   },
  // ];
  if (render_cards == true) {
    return (
      <div className={style.maindiv}>
        <NavigationBar />
        <div className="flex justify-center items-center bg-gray-800 ">
          <div className="flex flex-col items-center h-screen">
            {matches.map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.maindiv}>
        <NavigationBar />

        <div className="flex justify-center items-center bg-gray-800 h-screen">
          <header>Smart Contract here</header>
        </div>
      </div>
    );
  }
};

export default Matches;
