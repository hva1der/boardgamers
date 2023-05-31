# Introduction

The purpose of this app is to serve as a website for a boardgaming group. We meet every Monday at 7pm at a pub to play board games. The group consists of around 35 players each week. At the start of the previous week, some members will elect to host games from their collection.

This app aims to achieve the following:
- Promote the group to new members
- Show the location for the meeting
- Collate our shared collection of board games in a database
- Provide functionality for members to:
  - Nominate games they want to play
  - Vote to select the games to be played
- Display the above neatly on a page showing game name, players, and a YouTube video with instructions on how to play.

In the future, I aim to make sorting of players to games automatic, but as this was more complex than expected, the current format allows an Admin to allocate players to games on a separate admin page.

The app takes advantage of the Board Game Geek API, which contains information on thousands of board games.

# Instructions

1. Ensure you have Node.js and NPM (node package manager) installed.
2. Clone the repo from GitHub
   - Open your command line interface
   - Go to the directory you want to clone the repo to.
   - Run the following command:
     ```
     git clone https://github.com/hva1der/boardgamers.git
     ```
3. Install dependencies
   - Change directory to where you cloned the repo
   - Run the following command:
     ```
     npm install
     ```
4. Modify environment variables.
   - You can see examples in the `.env.example` file in the repo
   - You can make a copy of this and rename it to `.env.local`. Open this file in your code editor and change the variables according to your needs.
5. Run the app
   - You can start the development server by running the following in your CLI:
     ```
     npm run dev
     ```
   - Then go to `http://localhost:3000` in your browser to see the app in action.
6. Testing
   - You can run tests by running `npm run test`

# How to use the app

- On first access, the website provides access to the 'Home', 'FAQ', and 'Where to find us' pages. The 'FAQ' page provides basic info on how to use the site.
- The login field in the top right is visible on all pages. Existing users can log in here. Alternatively, new users can click the 'register' link, which will take them to the registration page:
  - To register, enter a username and password. Passwords have to be at least 6 characters and can't be the same as the username.
  - Once a user has registered, they can log in using the login field.
- Logged-in users can now access the 'This Week', 'Sign Up', and 'Nominate' pages.
  - Nominate: Allows users to search for games in the BGG database (see Third Party APIs below). The intention is that they will find games they own and click 'XXXXXX' to add them to a database of games owned by the group. They search for games by entering the game's BGG ID code. This is found in the BGG URL of the game, for example, for the game Scythe: [BGG Scythe URL](https://boardgamegeek.com/boardgame/169786/scythe). This ensures that the user can confirm the correct game is entered into the database (as there are multiple versions of games on the BGG API). The app displays a confirmation info before the user confirms to add the game.
  - Users can then nominate games from the database to be played at board game meetups.
  - Sign Up: In the future, users will be able to sign up to play nominated games here. For now, it provides functionality for admins to allocate players to games (SEE 'ADMIN ACCESS' BELOW).
  - This Week: Here users can see what games are scheduled to be played at the next meeting, which players have been allocated to what games, and (if provided) can see embedded YouTube video tutorials for how to play the games. Only games that have had players allocated will be displayed.

## ADMIN ACCESS

- Admin access is enabled by changing the 'isAdmin' property of a user to 'true' in the MongoDB 'users' collection.
- HyperionDev can access admin functionality by logging in with the following credentials:
  - username: admin
  - password: administrator
- Once logged in as an admin, they can access the games allocation page via a link on the Sign Up page. Here the admin can enter player names to add them to games. They can also add YouTube video ID codes to provide tutorials for games. Admins can also delete nominations in the event games have been entered in error.

# Security measures

- The MongoDB URL and JWT key have been concealed in a `.env.local` file.
- The app uses middleware and JWT to restrict access to the members' area and admin pages.
- Users are authenticated by username and password.

# Third-party APIs

- The app uses the Board Game Geek (BGG) XML API (ver. 2). See their documentation here: [BGG XML API2](https://boardgamegeek.com/wiki/page/BGG_XML_API2).
- The API provides detailed board game information for thousands of games, including pictures of games, popularity ratings, estimated playtimes, and player counts.
- It is utilized in this app for users to fetch information about their games before adding them to the MongoDB database.
- In order to access data in the XML format, I have utilized the xml2js library.

# Deployment

As Heroku remains paid-only and a suitable alternative has not been provided, I have not deployed the app. I was advised by Kuvashnee Naidoo that this is acceptable. I am working on finding a suitable alternative and hope to add a deployed version of this app to my Portfolio in the future.

# Known Issues

- User passwords are not encrypted. This was a deliberate omission as password protection and encryption has not been covered under the course. The app also does not store any sensitive user information, and users don't have access to modify crucial app functionality, so the priority for this was low. It will be implemented as a matter of good practice in the future, though.
- Sign Up functionality is being developed.
- Missing functionality to give users admin rights.
