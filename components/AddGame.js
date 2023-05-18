//
// *** NB this has the same name as a backend function /api/addGame.js - change? ***

// imports
import newGameToDB from "./utilities/newGameToDB";

// COMPONENT AddGame - Parent: NewGame -
// First: Searches for game from id and submit to DB button. Takes 'newGameDisplay' and 'ourGames' state variables as props.
// Then: onClick function BOTH sends new game to DB AND updates 'ourGames' state in parent C:Nominate to trigger re-render of C:OurGamesDisplay (sibling)
export default function AddGame({
  newGameDisplay,
  ourGamesState,
  setOurGamesState,
}) {
  // User confirms if game ID is for the correct game and clicks button to add it to DB (and displayed at list below)
  if (newGameDisplay) {
    return (
      <div>
        <p>
          ID {newGameDisplay.gameId} is for the game: {newGameDisplay.gameName}
        </p>
        <img
          src={newGameDisplay.gameThumbnailUrl}
          height={100}
          width={100}
          alt="BGG thumbnail"
          //   display= avoids issues with errors before user has searched for a game
          style={{
            display: newGameDisplay.gameThumbnailUrl ? "block" : "none",
          }}
        />
        <p>
          {/*   *** Code to add game to DB (AND to STATE!) goes in button here ***    test starts    */}
          To add this game:{" "}
          <button
            onClick={() => {
              // add an if statement to check if this game is already in state?
              setOurGamesState([
                // Spread Operator (...) to include previous games in array
                ...ourGamesState,
                // then add newGameDisplay which contains new game data from BGG API
                newGameDisplay,
              ]);
              // Now fetch POST to /api/addGame to add game to DB
              newGameToDB(newGameDisplay);
            }}
          >
            Click here
          </button>{" "}
        </p>
      </div>
    );
  } else {
    return <div>To add a new game: Please search for one by BGG ID above.</div>;
  }

  // Remember to set newGameDisplay to ("")/undefined/falsy if/after submit button clicked - ?
}
