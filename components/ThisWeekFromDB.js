// COMPONENT: Displays games to be played this week, with pics, players etc.
// Used in membersArea/thisWeek

// import CSS
import styles from "@/styles/ThisWeek.module.css";

// Note to self: OurGamesDisplay function works fine here
// Shouldn't need async as getStaticProps has already fetched this with it's async method.
export default function ThisWeekFromDB({ gamesToDisplay }) {
  // map through games in DB to display info for each game
  const gamesDisplay = gamesToDisplay.map((game) => {
    // map through each game's allocatedPlayers to get <li> list of players
    const players = game.allocatedPlayers.map((player, index) => {
      return (
        // Format of keys is ex: 'Scythe1'
        <li key={game.gameName + index}>{player}</li>
      );
    });

    // For each game, IF any players have been allocated, display: Thumbnail, players and video
    if (game.allocatedPlayers.length > 0) {
      return (
        <li key={game.gameId}>
          {/* enclose each game in a container */}
          <div className={styles.gameContainer}>
            <img
              src={game.gameThumbnailUrl}
              alt="This should be a 404 pic"
            ></img>
            <ul>{players}</ul>
            {/* Display tutorial video IF any has been provided, otherwise encourage user to look up rules themselves */}
            {game.tutorial ? (
              <iframe width="560" height="315" src={game.tutorial}></iframe>
            ) : (
              <p>
                The host hasn't provided a tutorial for this game, but if you're
                unsure of the rules feel free to look one up on YouTube
                yourself.
              </p>
            )}
          </div>
        </li>
      );
    }
  });

  return (
    <div className={styles.thisWeekPage}>
      <h1>This week we are playing:</h1>
      <ul>{gamesDisplay}</ul>
    </div>
  );
}
