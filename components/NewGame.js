import { useState } from "react";
// imports
import AddGame from "@/components/AddGame";
import styles from "@/styles/Nominate.module.css";
// Utility imports
import fetchBGGData from "@/components/utilities/fetchBGGData";

// COMPONENT: 'NewGame' - Parent: 'Nominate' - Siblings: 'OurGamesDisplay' - Children: 'AddGame'
// Searches BGG API for games inputted by user, then passes this to child C:AddGame to be added to DB (and state for displaying)
// takes S:setOurGamesState as prop so it can add a new game to this and pass back up to C:Nominate for re-rendering of C:OurGamesDisplay
export default function NewGame({ ourGamesState, setOurGamesState }) {
  // State for input field
  const [newGameInput, setNewGameInput] = useState("");
  // state for display element - used to display game title and box before confirming add to DB
  const [newGameDisplay, setNewGameDisplay] = useState("");

  return (
    <div className={styles.nominateNewGame}>
      <input onChange={(e) => setNewGameInput(e.target.value)}></input>
      {/* onClick function takes user inputted BGG game id, finds the game and stores
        the game info in STATE: 'newGameDisplay' to be displayed by C:AddGame */}
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
          ourGamesState={ourGamesState}
          setOurGamesState={setOurGamesState}
        />
      </div>
    </div>
  );
}
