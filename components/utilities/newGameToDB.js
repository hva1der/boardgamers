// POST fetch request to /api/addGame to add new game to DB. Used in C:AddGame
export default async function newGameToDB(newGameDisplay) {
  console.log(newGameDisplay);
  try {
    const res = await fetch("http://localhost:3000/api/addGame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newGameDisplay }),
    });
    const result = await res.json();
    console.log(result.message);
  } catch (err) {
    console.error(err);
  }
}
