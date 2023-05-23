// COMPONENT: Displays games to be played this week, with pics, players etc.
// Used in membersArea/thisWeek

// import CSS
import styles from "@/styles/ThisWeek.module.css";

// Note to self: OurGamesDisplay function works fine here
// Shouldn't need async as getStaticProps has already fetched this with it's async method.
export default function ThisWeekFromDB({ gamesToDisplay }) {
  // map through games in DB to display info for each game
  const gamesDisplay = gamesToDisplay.map((game) => {
    // map through each game's allocatedPlayers to get <li> of players
    const players = game.allocatedPlayers.map((player, index) => {
      return (
        // Format of keys is ex: 'Scythe1'
        <li key={game.gameName + index}>{player}</li>
      );
    });

    return (
      // For each game display: Thumbnail, players and video
      <li key={game.gameId}>
        {/* enclose each game in a container */}
        <div className={styles.gameContainer}>
          {/* <h5>{game.gameName}</h5> */}
          <img src={game.gameThumbnailUrl} alt="This should be a 404 pic"></img>
          <ul>{players}</ul>
          <iframe width="560" height="315" src={game.tutorial}></iframe>
        </div>
      </li>
    );
  });

  return (
    <div className={styles.thisWeekPage}>
      <h1>This week we are playing:</h1>
      <ul>{gamesDisplay}</ul>
    </div>
  );
}
