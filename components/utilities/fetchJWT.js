// Takes username and password (from BannerAndLogin Component) and sends this to path /api/login where login.js
// checks DB for matching credentials. If matching: login.js returns a jwt token (otherwise error).
// fetchJWT.js then saves this token as a cookie using the 'js-cookie' functionality

// import cookie functionality
import cookie from "js-cookie";

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
    // save jwt token to cookie "token"
    cookie.set("token", result.token); // add expiry? // cookie.set("token", result.token, { expires: 1 / 24 });
    // confirm login status to user
    alert(result.message);

    // Location.reload() to reflect page changes when logged in, such as "Welcome X" on front page.
    // However, this functionality not currently implemented
    // location.reload();
    //
  } catch (err) {
    // alert user to server errors
    alert(err);
  }
}

export default fetchJWT;
