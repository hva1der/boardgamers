//
// Admin/GM section to allocate players to games to be displayed on thisWeek page
// Access to pages in /admin/path is restricted - see: middleware.js

// PSEUDO
// So, what do we need?
// - Lists all games with sublists with inputfields for names
//  -> Assume/pretend the existence of our current Excel signup sheet
//  -> Now would also be the time to add YouTube links (imagined listed on background spreadsheet by hosts)
//  - Saves this to DB
//
//
//

// Screw FORMS, go with simple inputfields - fixed at 5 players max

import { useState } from "react";

// Lists all games with sublists with inputfields for names
// takes some UTILITY functions to GET and PUT game info from/to DB
export default function AllocateGames({ gamesToDisplay }) {
  // STATE for 5 players - known (potential) issue: if user marks players from different games before clicking submit
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [player3, setPlayer3] = useState("");
  const [player4, setPlayer4] = useState("");
  const [player5, setPlayer5] = useState("");

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
        {/* Submit button */}
        <button onClick={() => console.log(player1)}>Submit</button>
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
