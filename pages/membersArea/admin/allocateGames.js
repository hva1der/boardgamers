//
// Admin/GameMaster section to allocate players to games to be displayed on thisWeek page
// Access to pages in /admin/path is restricted - see: middleware.js
// NOTE: an 'admin' test user has been set up to access this page (has propperty isAdmin: true)
// username: admin, password: administrator

import { useState } from "react";

// import allocatePlayers (to DB) function and Delete games from DB function
import allocatePlayers from "@/components/utilities/allocatePlayers";
import { deleteNomination } from "@/components/utilities/deleteNomination";

// Lists all games with sublists with inputfields for names
// takes some UTILITY functions to GET and PUT game info from/to DB
export default function AllocateGames({ gamesToDisplay, BACKEND_URL }) {
  // STATE for 5 players - known (potential) issue: if user marks players from different games before clicking submit
  // Known issue: Need to input all names when updating players, as empty states will still be saved to DB and delete existing content
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();
  const [player3, setPlayer3] = useState();
  const [player4, setPlayer4] = useState();
  const [player5, setPlayer5] = useState();
  let players = [player1, player2, player3, player4, player5];
  // State for (optional) YouTube ID code
  const [tutorial, setTutorial] = useState();

  const gamesList = gamesToDisplay.map((game) => {
    return (
      <li key={game.gameId}>
        <h4>{game.gameName}</h4>
        <input
          placeholder="Player 1"
          onChange={(e) => setPlayer1(e.target.value)}
        ></input>
        <input
          placeholder="Player 2"
          onChange={(e) => setPlayer2(e.target.value)}
        ></input>
        <input
          placeholder="Player 3"
          onChange={(e) => setPlayer3(e.target.value)}
        ></input>
        <input
          placeholder="Player 4"
          onChange={(e) => setPlayer4(e.target.value)}
        ></input>
        <input
          placeholder="Player 5"
          onChange={(e) => setPlayer5(e.target.value)}
        ></input>
        {/* (optional) YouTube tutorial ID code input */}
        <input
          placeholder="YouTube ID Code"
          onChange={(e) => setTutorial(e.target.value)}
        ></input>

        {/* Submit button */}
        <button
          onClick={() =>
            allocatePlayers(game.gameId, players, tutorial, BACKEND_URL)
          }
        >
          Submit
        </button>
        {/* DELETE button - for removing nominated games from DB */}
        <button
          onClick={() => {
            deleteNomination(game.gameId, BACKEND_URL);
            console.log(BACKEND_URL);
          }}
        >
          Delete
        </button>
      </li>
    );
  });

  return (
    <div>
      <h1>Allocate players to games</h1>
      <ul>{gamesList}</ul>
    </div>
  );
}

// getServerSideProps - fetches games from DB collection 'nominatedgames'.
// also gets BACKEND_URL from process.env to pass to frontend code that uses this
export const getServerSideProps = async () => {
  const res = await fetch(process.env.BACKEND_URL + "/api/nominatedList");
  const data = await res.json();
  const gamesToDisplay = data.allGames;
  const BACKEND_URL = process.env.BACKEND_URL;

  return {
    props: { gamesToDisplay, BACKEND_URL },
  };
};

// Notes/known issues:
// # Chosen state solution is not ideal. Will write to wrong game if user clicks a submit
// button that doesn't belong to the game where Player names are entered.
// Also have to rewrite all info when editing names on a game.
// Did not fix these issues as future version will have an algorithm to allocate players to
// games. The current code is more of a placeholder.
