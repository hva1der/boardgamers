// DELETE fetch request to /api/deleteGame to remove nominated game from DB
// for removing surplus games, deleting games added in error,
// and for clearing the DB for next week's nominations - in future will add DELETE ALL button

// takes the ID of the game to delete as prop. also the BACKEND_URL from process.env to acces fetch to DB
export async function deleteNomination(idToDelete, BACKEND_URL) {
  console.log(BACKEND_URL);
  try {
    const res = await fetch(
      `${BACKEND_URL}/api/deleteGame/?gameId=${idToDelete}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await res.json();
    // No display delete confirmation to user - self evident when game vanishes from list
    console.log(result.message);
    // reload location to reflect change (and confirm game has been deleted from DB)
    location.reload();
  } catch (err) {
    console.error(err);
  }
}
