//
// Used in Component: NewGame.js
//
// The API uses XML rather than JSON, so I had to take some extra steps
// See bottom of page for further explanation.
import { parseStringPromise } from "xml2js"; // ref: https://www.npmjs.com/package/xml2js

// Function: Fetch game info from -BGG XML API- and store in state 'newGameDisplay'
export default async function fetchBGGData(gameId, setNewGameDisplay) {
  try {
    const res = await fetch(
      `https://www.boardgamegeek.com/xmlapi2/thing?id=${gameId}`
    );
    // convert response to string so it can be parsed - 'xmlStr' ends up looking like the result I get when going to ex: "https://www.boardgamegeek.com/xmlapi2/thing?id=13" in the browser.
    const xmlStr = await res.text();
    // parse to JS object so I can access properties (with .dot notation etc.) - I asked a friend to explain this concept to me (see below)
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
  } catch (error) {
    console.error(error);
    alert("Something went wrong, please check if the game ID is correct");
  }
}

// parseStringPromise explained by Lars:
//
// ParseStringPromise is a method provided by the xml2js library that allows you to convert an
// XML string to a JavaScript object, just like the JSON.parse method converts a JSON string to a JavaScript object.

// In other words, just like you can use JSON.parse to parse a JSON string, you
// can use parseStringPromise to parse an XML string. The resulting JavaScript object can then be accessed like any
// other JavaScript object, allowing you to extract the data you need from the XML.

// Here's an example of how you can use parseStringPromise to parse an XML string:

// const xmlString = '<person><name>John</name><age>30</age></person>';
// const parsedObject = await parseStringPromise(xmlString);
// console.log(parsedObject); // { person: { name: ['John'], age: ['30'] } }
// Note that the xml2js library also provides a parseString method that is not a
// promise-based function, but uses a callback function instead.
