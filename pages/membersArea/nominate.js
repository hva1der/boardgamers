import fetch from "isomorphic-unfetch";
import { useState } from "react";
import styles from "@/styles/Nominate.module.css";
// COMPONENT IMPORTS
import NewGame from "@/components/NewGame";
import OurGamesDisplay from "@/components/OurGamesDisplay";

// COMPONENT: Assembles and displays components. Takes ourGames as prop from getStaticProps below
export default function Nominate({ ourGames }) {
  // save ourGames as a state variable for React rendering etc.
  const [ourGamesState, setOurGamesState] = useState(ourGames);

  return (
    <div className={styles.nominatePage}>
      <h1 className={styles.nominateMainHeader}>
        On this page members can view, add and nominate games
      </h1>
      <NewGame
        ourGamesState={ourGamesState}
        setOurGamesState={setOurGamesState}
      />
      <OurGamesDisplay ourGames={ourGamesState} />
    </div>
  );
}

// Get static props - fetch list of games array from DB - comes as an array with all game info.
// pass as prop to Nominate, which in turn passes it to OurGamesDisplay
// Only used on initial page load - new games added to state to re-render displayed list
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/gamesList");
  const data = await res.json();
  const ourGames = data.allGames;

  return {
    props: { ourGames },
  };
};
