import fetch from "isomorphic-unfetch";
import { useState } from "react";
import styles from "@/styles/Nominate.module.css";
// COMPONENT IMPORTS
import NewGame from "@/components/NewGame";
import OurGamesDisplay from "@/components/OurGamesDisplay";

// Page: Assembles and displays components. Takes ourGames as prop from getStaticProps below
export default function Nominate({ ourGames }) {
  // save ourGames as a state variable for React rendering etc - passes this to child components
  const [ourGamesState, setOurGamesState] = useState(ourGames);

  return (
    <div className={styles.nominatePage}>
      <h1 className={styles.nominateMainHeader}>
        On this page members can view, add and nominate games
      </h1>
      {/* User searches for and adds games to DB */}
      <NewGame
        ourGamesState={ourGamesState}
        setOurGamesState={setOurGamesState}
      />
      {/* Displays games in DB */}
      <OurGamesDisplay ourGames={ourGamesState} />
    </div>
  );
}

// Get serverSide props - fetch list of games array from DB - comes as an array with all game info.
// pass as prop to Nominate, which in turn passes it to OurGamesDisplay
// Only used on initial page load - new games added to state to re-render displayed list
export const getServerSideProps = async () => {
  const res = await fetch(process.env.BACKEND_URL + "/api/gamesList");
  const data = await res.json();
  const ourGames = data.allGames;

  return {
    props: { ourGames },
  };
};
