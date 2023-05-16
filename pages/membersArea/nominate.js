import fetch from "isomorphic-unfetch";
import { useState } from "react";
// COMPONENT IMPORTS
import OurGamesDisplay from "@/components/OurGamesDisplay";
import AddGame from "@/components/AddGame";
// Utility imports
import fetchBGGData from "@/components/utilities/fetchBGGData";
import { set } from "mongoose";

// Pseudo:
/*
This page COULD have list of all aavailable games.
But core functionality only requires a dropdown of all our games from DB, so focus on that first. It would not be directly dependant on the above, the display would just be a nice feature. 

ACUTALLY: This will also be the page to add and view 'Our Games'

ADMIN: Could be authorised to delete games from 'Our Games'? 

*/

// COMPONENT: Add games to 'Our Games'. (only used here, so not imported etc) Add by BGG ID. Adds Name, thumbnail, playerCount and playtime to DB.
// NOTE: id will also be used as id for DB, keys etc.
function NewGame() {
  // State for input field
  const [newGameInput, setNewGameInput] = useState("");
  // state for display element - used to display game title and box before confirming add to DB
  const [newGameDisplay, setNewGameDisplay] = useState("");

  return (
    <>
      <input onChange={(e) => setNewGameInput(e.target.value)}></input>
      {/* onClick function takes user inputted BGG game id, finds the game and stores
      the game info in STATE: 'newGameDisplay' */}
      <button
        onClick={() => {
          fetchBGGData(newGameInput, setNewGameDisplay);
        }}
      >
        Check ID
      </button>
      <div>
        <AddGame
          newGameDisplay={newGameDisplay}
          setNewGameDisplay={setNewGameDisplay}
        />
      </div>
    </>
  );
}

//
//
// Finally: Assemble and display components. Takes ourGames as prop from getStaticProps below
export default function Nominate({ ourGames }) {
  return (
    <>
      <h1>On this page members can view, add and nominate games.</h1>
      <NewGame />
      <OurGamesDisplay ourGames={ourGames} />
    </>
  );
}

// Get static props - fetch list of games array from DB - comes as an array with all game info.
// pass as prop to Nominate, which in turn passes it to OurGamesDisplay
// Only used on initial page load - new games added to state to re-render displayed list
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/gamesList");
  const data = await res.json();
  const ourGames = data.allGames;

  return {
    props: { ourGames },
  };
};
