// 3) Backend unit test
// Test password requirements function used in pages/api/createUser.js
function badPassword(username, password) {
  if (password == username || password.length < 6) {
    return true;
  } else return false;
}

test("returns true if bad password", () => {
  expect(badPassword("alex", "alex")).toBe(true);
});
