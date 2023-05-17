//
// *** NB NOTE NB: This shares name with COMPONENT FetchBGGData - change one of them?? ***

// The API uses XML rather than JSON, so I had to take some extra steps - *** NB: Add to README to install xml2js? ***
import { parseStringPromise } from "xml2js"; // ref: https://www.npmjs.com/package/xml2js

// Function: Fetch game info from -BGG XML API- and store in state 'newGameDisplay'
export default async function fetchBGGData(gameId, setNewGameDisplay) {
  try {
    const res = await fetch(
      `https://www.boardgamegeek.com/xmlapi2/thing?id=${gameId}`
    );
    // convert response to string so it can be parsed - xmlStr end up looking like the result I get when going to "https://www.boardgamegeek.com/xmlapi2/thing?id=13" in the browser.
    const xmlStr = await res.text();
    // parse to JS object so I can access properties (with .dot notation etc.)
    const xmlDoc = await parseStringPromise(xmlStr);
    // assign properties to be stored in DB: id, name, player count, playtime and thumbnail URL
    let newGame = {};
    newGame.gameId = gameId;
    newGame.gameName = xmlDoc.items.item[0].name[0].$.value;
    newGame.minPlayerCount = xmlDoc.items.item[0].minplayers[0].$.value;
    newGame.maxPlayerCount = xmlDoc.items.item[0].maxplayers[0].$.value;
    newGame.minLength = xmlDoc.items.item[0].minplaytime[0].$.value;
    newGame.maxLength = xmlDoc.items.item[0].maxplaytime[0].$.value;
    newGame.gameThumbnailUrl = xmlDoc.items.item[0].thumbnail[0];
    // Set to game display to show on page before submitting to db
    setNewGameDisplay(newGame);
    console.log(newGame.gameThumbnailUrl);
  } catch (error) {
    console.error(error);
    alert("Something went wrong, please check if the game ID is correct");
  }
}
