// DELETE fetch request to /api/deleteGame to remove nominated game from DB
// for removing surplus games, deleting games added in error,
// and for clearing the DB for next week's nominations - in future will add DELETE ALL button

export async function deleteNomination(idToDelete) {
  try {
    const res = await fetch(
      `http://localhost:3000/api/deleteGame/?gameId=${idToDelete}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await res.json();
    // change to better message/ visible to user
    console.log(result.message);
    // reload location to reflect change (and confirm game has been deleted from DB)
    location.reload();
  } catch (err) {
    console.error(err);
  }
}
