// imports
import newGameToDB from "./utilities/newGameToDB";

// COMPONENT AddGame - Parent: NewGame -
// Takes 'newGameDisplay' and 'ourGames' state variables as props from parent (where user has searched BGG API for game info)
// User confirms if this is the game they want to add to DB
// Then: onClick function BOTH sends new game to DB AND updates 'ourGames' state in parent C:Nominate to trigger re-render of C:OurGamesDisplay (sibling)
// backend handled in /pages/api/addGame.js
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
          height={150}
          width={150}
          alt="BGG thumbnail"
          //   display style avoids issues with errors before user has searched for a game. Also set image to be centred
          style={{
            display: newGameDisplay.gameThumbnailUrl ? "block" : "none",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <p>
          {/*   onClick adds game to DB and updates state to display/re-render  */}
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
              // Now fetch POST to /api/addGame with utility function to add game to DB
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
}
