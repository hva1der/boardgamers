// PUT fetch request to /api/addPlayers to add allocated players (and YouTube tutorial) to
// nominated games DB collection

// takes as props: the gameId, an array of <= 5 players, and an (optional) YouTube url/code etc.
export default async function allocatePlayers(gameId, players, tutorial) {
  try {
    const res = await fetch("http://localhost:3000/api/addPlayers", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gameId, players, tutorial }),
    });
    const result = await res.json();
    // change to better message/ visible to user
    console.log(result.message);
    // Location.reload to ensure forms are cleared for next game data to be submitted.
    location.reload();
  } catch (err) {
    console.error(err);
  }
}
