// COMPONENT: Gets array of games from DB via getStaticProps on Nominate Page
// (passed as prop 'ourGames')
// Displays games as list on Nominate page AND adds nominate button to each game

// Imports
import nominateToDB from "./utilities/nominateToDB";
import styles from "@/styles/Nominate.module.css";

export default function OurGamesDisplay({ ourGames }) {
  const gamesList = ourGames.map((game) => {
    return (
      <li key={game.gameId} className={styles.ourGamesList}>
        {/* Clicking Nominate btn takes all game info and sends it to 'nominatedgames' DB collection */}
        <button
          onClick={() => nominateToDB(game)}
          className={styles.nominateButton}
        >
          Nominate
        </button>
        <b>{game.gameName}</b>
      </li>
    );
  });

  return (
    <div className={styles.nominateGamesDisplay}>
      <h3>Our Games</h3>
      <ul>{gamesList}</ul>
    </div>
  );
}

// NOTE:
// # Aim to improve by sorting list of games alphabetically
