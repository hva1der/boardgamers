// COMPONENT: List of games we own. Gets array of games from DB via getStaticProps
// on Nominate Page. Displays games as list Nominate page.
// CHILD component of PARENT Nominate

// takes 2 props: 'ourGames' (games from DB) and 'newGame' which takes the
export default function OurGamesDisplay({ ourGames }) {
  const gamesList = ourGames.map((game) => {
    return <li key={game.gameId}>{game.gameName}</li>;
  });

  return (
    <>
      <h3>Our Games</h3>
      <ul>{gamesList}</ul>
    </>
  );
}
