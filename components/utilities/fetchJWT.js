//

// just for testing for now
async function fetchJWT() {
  const res = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "testOne",
      password: "testOne",
    }),
  });
  const result = await res.json();
  console.log(result);
}

export default fetchJWT;
