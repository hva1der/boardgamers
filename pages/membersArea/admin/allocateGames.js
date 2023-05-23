//
// Admin/GM section to allocate players to games to be displayed on thisWeek page
// Access to pages in /admin/path is restricted - see: middleware.js

// *** NOTE: State solution is poor and prone to user error. Change if there is time! ***
// See bottom of page for possible start of alt solution

import { useState } from "react";

// import allocatePlayers (to DB) function
import allocatePlayers from "@/components/utilities/allocatePlayers";

// Lists all games with sublists with inputfields for names
// takes some UTILITY functions to GET and PUT game info from/to DB
export default function AllocateGames({ gamesToDisplay }) {
  // STATE for 5 players - known (potential) issue: if user marks players from different games before clicking submit
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState();
  const [player3, setPlayer3] = useState();
  const [player4, setPlayer4] = useState();
  const [player5, setPlayer5] = useState();
  let players = [player1, player2, player3, player4, player5];
  // State for (optional) YouTube link/code
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
        <button onClick={() => allocatePlayers(game.gameId, players, tutorial)}>
          Submit
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

// getStaticProps - fetches games from DB collection 'nominatedgames'
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/nominatedList");
  const data = await res.json();
  const gamesToDisplay = data.allGames;

  return {
    props: { gamesToDisplay },
  };
};

// ALTERNATIVE version for player name fields - generated based on player count for each game
// let nameFields = [];
// for (let i = 1; i <= game.maxPlayerCount; i++) {

//   nameFields.push(<input key={i} placeholder={`Player ${i}`} />);
// }
// and use with
// return (
//   <li key={game.gameId}>
//     <b>{game.gameName}</b>
//     <form>{nameFields}</form>
//   </li>
// );
