// PUT fetch request to /api/nominateGame to set nominated property for game in DB to true. Used in C:OurGamesDisplay
export default async function nominateToDB(gameId) {
  try {
    const res = await fetch("http://localhost:3000/api/nominateGame", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gameId }),
    });
    const result = await res.json();
    // *** Change this to a better message/confirmation for users ***
    console.log(result.message);
  } catch (err) {
    console.error(err);
  }
}
