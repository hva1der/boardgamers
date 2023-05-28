// POST fetch request to /api/nominateGame to add game from normal 'games' collection to 'nominatedgames'
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
    // alert user that game has been nominated/or is already nominated
    // In future will change this to display on page, rather than by alert
    alert(result.message);
  } catch (err) {
    console.error(err);
  }
}
