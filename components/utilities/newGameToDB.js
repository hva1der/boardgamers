// POST fetch request to add new game to DB. Used in C:AddGame
export default async function newGameToDB(newGameDisplay) {
  try {
    const res = await fetch("http://localhost:3000/api/addGame", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ newGameDisplay }), // or make this an object {data: newGameDisplay}?
    });
    const result = await res.json();
    console.log(result.message);
  } catch (err) {
    console.error(err);
  }
}
