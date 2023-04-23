//

// just for testing for now
async function fetchJWT() {
  const res = await fetch("http://localhost:3000/api/getJWT");
  const result = await res.json();
  console.log(result);
}

export default fetchJWT;
