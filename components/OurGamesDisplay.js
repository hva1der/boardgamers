// COMPONENT: Gets array of games from DB via getStaticProps
// on Nominate Page. Displays games as list Nominate page.
// CHILD component of PARENT Nominate

// Imports
import nominateToDB from "./utilities/nominateToDB";

// takes 2 props: 'ourGames' (games from DB) and 'newGame' which takes the - changed to only 1 prop(?)
// *** TO DO: sorts array of games alphabetically and displays as a list ***
export default function OurGamesDisplay({ ourGames }) {
  const gamesList = ourGames.map((game) => {
    return (
      <li key={game.gameId}>
        {/* Clicking Nominate btn takes all game info and send it to 'nominated' DB collection */}
        <button onClick={() => nominateToDB(game)}>Nominate</button>
        <b>{game.gameName}</b>
      </li>
    );
  });

  return (
    <>
      <h3>Our Games</h3>
      <ul>{gamesList}</ul>
    </>
  );
}
