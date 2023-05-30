// PUT fetch request to /api/addPlayers to add allocated players (and YouTube tutorial) to
// nominated games DB collection.
// Used in /pages/membersArea/admin/allocateGames - runs onClick of Submit button

// takes as props: the gameId, an array of <= 5 players, and an (optional) YouTube ID code. And the BACKEND_URL from process.env
// to access DB fetch
export default async function allocatePlayers(
  gameId,
  players,
  tutorial,
  BACKEND_URL
) {
  try {
    const res = await fetch(`${BACKEND_URL}/api/addPlayers`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gameId, players, tutorial }),
    });
    const result = await res.json();
    // display alert that users have been added
    alert(result.message);
    // Location.reload to ensure forms are cleared for next game data to be submitted.
    location.reload();
  } catch (err) {
    console.error(err);
  }
}
