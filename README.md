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
  - Nominate: Allows users to search for games in the BGG database (see Third Party APIs below). The intention is that they will find games they own and click the button to add them to a database of games owned by the group. They search for games by entering the game's BGG ID code. This is found in the BGG URL of the game, for example, for the game Scythe: https://boardgamegeek.com/boardgame/169786/scythe . This ensures that the user can confirm the correct game is entered into the database (as there are multiple versions of games on the BGG API). The app displays a confirmation info before the user confirms to add the game.
  - Users can then nominate games from the database to be played at board game meetups.
  - Sign Up: In the future, users will be able to sign up to play nominated games here. For now, it provides functionality for admins to allocate players to games (SEE 'ADMIN ACCESS' BELOW).
  - This Week: Here users can see what games are scheduled to be played at the next meeting, which players have been allocated to what games, and (if provided) can see embedded YouTube video tutorials for how to play the games. Only games that have had players allocated will be displayed.

## Admin Access

- Admin access is enabled by changing the 'isAdmin' property of a user to 'true' in the MongoDB 'users' collection.
- Once logged in as an admin, they can access the games allocation page via a link on the Sign Up page. Here the admin can enter player names to add them to games. They can also add YouTube video ID codes to provide tutorials for games.
  - Admins can also delete nominations in the event games have been entered in error.

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

- While the app works in its current state, I am aware the design of the fetch functionality for interacting with the frontend is unnecessarily complicated and doesn’t take advantage of the built in functionality of Next.js. I am working on an improved version.

---

Original Plan

---

# System architecture

- I will be using Next.js with create-next-app

- Using this because I like the simplicity of Next, and the file structure feels more intuitive than the other libraries I've learned so far.

- (Postponed) I will deploy it using the Vercel CLI - this is also one of the reasons I've chosen Next, as, especially with the lack of a free tier of Heroku, it makes deployment of my app easier and more straightforward.

- I will use vanilla CSS to style my app. This is because I want to get a better grasp of the basics before I start using more libraries. In the future I might move to Tailwind CSS, but I want to understand the underpinnings first.
  I will be implementing the CSS using CSS modules - as I feel this is a tidy and straightforward approach that I know is supported and well integrated with Next.

# System requirements specification

The app will be a website for my local boardgame group. Once I have a working version of it that meets certain requirements it will (hoprefully) actually be used in real life.
Unfortunately, due to time restrictions, I won't be able to implement the full functionality I wanted, more on that later.

## who will use your application

30-50 of my local boardagame group members. I chose this project in part because I would have a large group of friendly people that can test the site.

## how will they benefit from using it

- No more using boring old spreadsheets to organise tables. (at least later, this is more complicated so will have to wait. For now I will focus on displaying the tables (doing the sorting in the background manually).

- Shiny website to promote the group to new members

- SEO for anyone looking for us.

## user stories

- New user: Feels welcomed by an inclusive welcome page with some choice pictures showcasing the social group. Before registering only the 'Home', 'FAQ' and 'Where to find us' pages will be visible.
  Intuitively finds login/register button at top right of page. 'Registration page' appears, but is otherwise hidden. Registers with email/pw.
  Navigates to 'this week's games' page and finds the list of games being played. Sees that there are spaces on 'Game Y'. Navigates to the signup page, puts Game Y as his 'priority 1' choice, and another 2 games as alternatives. At the end of the week, the places are allocated and s/he finds themselves now listed on the 'this week's games' page under one of their chosen games.

- Game Host: At start of week logs in with their 'host' account, which allows them to list games they are willing to host/teach to play at next week's meeting - on the 'Nominate games' page. Sets the max number of players they want to play with. Provides URL to YouYube video with how to play instructions to help people prepare for the game (if it is complex).

- Game master: At the end of the week logs in with their 'GM' account, which allows them to go over the games' votes and allocate players to seats according to their preferences.
  ( This will be one of the major changes when I develop this site further - I want it to have automatic sorting of tables and a more advanced/intuitive voting system - this is something many boardgame groups struggle with and I think I can contribute a good system. Unfortunately I don't think I would be able to implement it in time for the course deadline. I will work on it later, and it will likely be the main feature on my portfolio).

- Existing user A: Logs in with their account and can see the plan of games to be played and their allocation. Sees video instructions etc to prepare for the games night.

- Existing user B: Can log in and CRUD to the list of their games on the 'Games we own' page. Addding both games they own, are willing to teach, want to play. As well as games on their wishlist either to own/buy from other members or that they want to request the Hosts to play on future meetings. (Again, functionality that I'll likely only be able to add some of in time for the deadline).

- Admin: Logs in with their admin credentials. Has access to all of the above features. Can rearrange tables freely. I don't yet know how to handle password reset etc functionality, but that will be possible by admins in the future, and later by users themselves.

( The design of this app will be loosely based on one of my earlier tasks. It has been one of the main goals of doing this course to be able to design a website for my boardgame group.)

## Other software that does something similar

Some boardgame groups have websites, but the majority don't. If I can make this work I envisage a business opportunity in marketing it to other groups (I already know several that might be interested).

## Functional and non-functional requirements

### Functional requirements

-> Create users and store details in DB. Reset username/password functionality.
-> Login functionality using the above – including authentication. Different levels of access depending on user role.
-> Background/admin CRUD for editing the lists of available boardgames. In the future this will be moved to user interaction.
-> CRUD for users to vote for boardgames.
-> Sorting algorithm for determining who gets to play what games.

### Non-functional requirements

-> Usability: Clear and intuitive functionality. Including easy to understand instructions for users. Such as pop-up explanations on mouse-over. Alert and keep users informed of progress if there are delays/loading and bugs.

-> Reliability. Minimise downtime. Ensure database can handle a large number (simultaneous) user interactions. Ensure integrity in case of disruptions etc - this is important as people are particular about the games they want to play and want to preserve their allocated seat etc.

-> Performance: Ensure database can effectively handle the workload – minimise read/write times and display times/updating with front/backend.

-> Security: Minimal requirements as no sensitive information will be stored. Might ask users to register with a username, rather than email, if they want to keep their email confiendetial. May otherwise in the future add encryption to secure emails. Don't yet know how to secure/encrypt passwords so they will unfortuantely be unsecured for now.

-> Accessibility: No time to implement this now, but will be a priority in the future. Ensure the app is accessible to people with differing needs. Features like text-to-speech, increased font size, darkmode/coloured overlays for content.
