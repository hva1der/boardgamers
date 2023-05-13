// Takes username and password from BannerAndLogin Component and sends this to path /api/login where login.js
// checks DB for matching credentials. If matching => login.js returns a jwt token (otherwise error).
// fetchJWT.js then saves this token as a cookie using the 'js-cookie' functionality
// cookie functionality
import cookie from "js-cookie";

// just for testing for now
async function fetchJWT(username, password) {
  try {
    const res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await res.json();
    console.log(result.message); // for testing - remove
    cookie.set("token", result.token); // add expiry? // cookie.set("token", result.token, { expires: 1 / 24 });
  } catch (err) {
    console.log(err);
  }
}

export default fetchJWT;
