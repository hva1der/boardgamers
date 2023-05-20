// COMPONENT: Displays games to be played this week, with pics, players etc.
// Used in membersArea/thisWeek

// Note to self: OurGamesDisplay function works fine here
// Shouldn't need async as getStaticProps has already fetched this with it's async method.
export default function ThisWeekFromDB({ gamesToDisplay }) {
  // map through games in DB to display info for each game
  const gamesDisplay = gamesToDisplay.map((game) => {
    return (
      <li key={game.gameId}>
        <img src={game.gameThumbnailUrl} alt="This should be a 404 pic"></img>
      </li>
    );
  });

  return (
    <div>
      <h1>This page shows the games we are playing this week</h1>
      <ul>{gamesDisplay}</ul>
    </div>
  );
}
