import fetch from "isomorphic-unfetch";
import { useState } from "react";
// The API uses XML rather than JSON, so I had to take some extra steps
import { parseStringPromise } from "xml2js"; // ref: https://www.npmjs.com/package/xml2js

// Pseudo:
/*
This page COULD have list of all aavailable games.
But core functionality only requires a dropdown of all our games form DB, so focus on that first. It would not be directly dependant on the above, the display would just be a nice feature. 

ACUTALLY: This will also be the page to add and view 'Our Games'

ADMIN: Could be authorised to delete games from 'Our Games'? 

*/

// COMPONENT: Add games to 'Our Games'. (only used here, so not imported etc) Add by BGG ID. Adds Name, thumbnail, playerCount and playtime to DB.
// NOTE: id will also be used as id for DB, keys etc.
function NewGame() {
  // State for input field
  const [newGameInput, setNewGameInput] = useState("");
  const [newGameDisplay, setNewGameDisplay] = useState("");

  // Fetch from BGG XML API
  async function fetchBGGData(gameId) {
    try {
      const res = await fetch(
        `https://www.boardgamegeek.com/xmlapi2/thing?id=${gameId}`
      );
      // convert response to string so it can be parsed - xmlStr end up looking like the result I get when going to "https://www.boardgamegeek.com/xmlapi2/thing?id=13" in the browser.
      const xmlStr = await res.text();
      // parse to JS object so I can access properties (with .dot notation etc.)
      const xmlDoc = await parseStringPromise(xmlStr);
      // assign properties to be stored in DB: thumbnail, player count and playtime
      let newGame = {};
      newGame.id = gameId;
      newGame.name = xmlDoc.items.item[0].name[0].$.value;
      newGame.thumbnailUrl = xmlDoc.items.item[0].thumbnail[0];
      newGame.minPlayers = xmlDoc.items.item[0].minplayers[0].$.value;
      newGame.maxPlayers = xmlDoc.items.item[0].maxplayers[0].$.value;
      newGame.minPlayTime = xmlDoc.items.item[0].minplaytime[0].$.value;
      newGame.maxPlayTime = xmlDoc.items.item[0].maxplaytime[0].$.value;
      // test
      console.log(newGame);
      // Set to game display to show on page before submitting to db
      setNewGameDisplay(newGame);
    } catch (error) {
      console.error(error);
    }
  }

  // COMPONENT: Display game from id and submit to DB button. Takes newGameDisplay as a prop.
  function AddGame({ newGameDisplay }) {
    console.log(newGameDisplay);
    if (newGameDisplay) {
      return (
        <div>
          <p>
            ID {newGameDisplay.id} is for the game: {newGameDisplay.name}
          </p>
        </div>
      );
    } else {
      return (
        <div>To add a new game: Please search for one by BGG ID above.</div>
      );
    }

    // Remember to set newGameDisplay to ("")/undefined/falsy if/after submit button clicked.
  }

  return (
    <>
      <input onChange={(e) => setNewGameInput(e.target.value)}></input>
      <button onClick={() => fetchBGGData(newGameInput)}>test</button>
      <div>
        <AddGame newGameDisplay={newGameDisplay} />

        {/* <img
          src={newGameDisplay.thumbnailUrl}
          height={100}
          width={100}
          alt="BGG thumbnail"
          //   display= avoids issues with errors before user has searched for a game
          style={{ display: newGameDisplay.thumbnailUrl ? "block" : "none" }}
        /> */}
      </div>
    </>
  );
}

// COMPONENT: View list of 'Our Games' from DB. (only use here, so not imported etc)

// Call Components

export default function Nominate() {
  return (
    <>
      <NewGame />
    </>
  );
}
