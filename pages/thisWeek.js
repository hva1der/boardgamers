// import FetchBGGData from "@/components/FetchBGGData";

// export default () => {
//   return (
//     <>
//       <div>
//         <FetchBGGData />
//       </div>
//     </>
//   );
// };

import fetch from "isomorphic-unfetch";
// The API uses XML rather than JSON, so I had to take some extra steps
import { parseStringPromise } from "xml2js"; // ref: https://www.npmjs.com/package/xml2js

// ************************************
// Some/all of this should be made into a COMPONENT
// ***********************************

// Function needs reformatting to fit my purpose
function FetchBGGData({ imageUrl, playerCount, playTime }) {
  // ****************************** NOTE: Something wrong here - paths definitely work, but things don't always show! *************************
  // If/in case there is an issue with load times, API restrictions etc - maybe save these details to DB when selected by hosts, then call as needed later?
  return (
    <div>
      <img src={imageUrl} alt="Board game" />

      {/* ****** Adding more info ********** */}
      <p>Max players: {playerCount}</p>
      <p>Playtime: {playTime} minutes</p>
    </div>
  );
}

// fetch() url needs programming to take input
export const getStaticProps = async () => {
  try {
    const res = await fetch(
      "https://www.boardgamegeek.com/xmlapi2/thing?id=223555"
    );
    // convert response to string so it can be parsed - xmlStr end up looking like the result I get when going to "https://www.boardgamegeek.com/xmlapi2/thing?id=13" in the browser.
    const xmlStr = await res.text();
    // parse to JS object so I can access properties (with .dot notation etc.)
    const xmlDoc = await parseStringPromise(xmlStr);

    // DEV NOTE (delete): Note the '.dot' AND [] bracket notation here for accessing parts of the XML!
    const imageUrl = xmlDoc.items.item[0].thumbnail[0];

    // testing additional values - note also passed as props ***********************************************
    const playerCount = xmlDoc.items.item[0].maxplayers[0].$.value;
    const playTime = xmlDoc.items.item[0].maxplaytime[0].$.value;

    // ****** NOTE: ID will likely be key for other parts (keys, IDs for DB/CRUD etc) ***********************

    // Note the use of the '$' here to 'access the attributes of an element, in this case: <item type="boardgame" id="13">
    console.log("ID: " + xmlDoc.items.item[0].$.id);
    // or for number of players (note index number in the final child, rather than noting array position in the parent): (recommneded players was trickier to access)
    console.log(
      `Number of players: ${xmlDoc.items.item[0].minplayers[0].$.value}-${xmlDoc.items.item[0].maxplayers[0].$.value}`
    );
    // playtime:
    console.log(
      `Playtime: ${xmlDoc.items.item[0].minplaytime[0].$.value} to ${xmlDoc.items.item[0].maxplaytime[0].$.value} minutes`
    );

    return {
      props: {
        imageUrl,
        playerCount,
        playTime,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        imageUrl: "/404_cat.png",
      },
    };
  }
};

export default FetchBGGData;

//
//
// parseStringPromise explained by Lars:

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
