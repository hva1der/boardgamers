//
// *** NB this has the same name as a backend function /api/addGame.js - change? ***

// COMPONENT: Display game from id and submit to DB button. Takes newGameDisplay state variable as a prop.
export default function AddGame({ newGameDisplay, setNewGameDisplay }) {
  // User confirms if game ID is for the correct game and clicks button to add it to DB (and displayed at list below)
  if (newGameDisplay) {
    console.log(newGameDisplay);
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
          {/*   *** Code to add game to DB (AND to STATE!) goes in button here ***        */}
          To add this game: <button>Click here</button>{" "}
        </p>
      </div>
    );
  } else {
    return <div>To add a new game: Please search for one by BGG ID above.</div>;
  }

  // Remember to set newGameDisplay to ("")/undefined/falsy if/after submit button clicked - ?
}
