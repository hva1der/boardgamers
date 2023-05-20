// POST fetch request to /api/nominateGame to add game from normal 'games' collection to 'nominated'
// collection. Used in C:OurGamesDisplay
export default async function nominateToDB(nominatedGame) {
  try {
    const res = await fetch("http://localhost:3000/api/nominateGame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nominatedGame }),
    });
    const result = await res.json();
    // *** Change this to a better message/confirmation for users ***
    console.log(result.message);
  } catch (err) {
    console.error(err);
  }
}
