// Page with list of games with info, pics, video and list of allocated players.
// This page is the main purpose of the website: to help players prepare for our weekly games-night

import ThisWeekFromDB from "@/components/ThisWeekFromDB";

// COMPONENT: Parent to ThisWeekFromDB
// takes gamesToDisplay from getStaticProps and passes it as prop to C:ThisWeekFromDB which displays it.
export default function ThisWeek({ gamesToDisplay }) {
  return (
    <div>
      {/* Main content - list of games with info, pics, video and list of allocated players. Takes 
      'gamesToDisplay' as prop.  */}
      <ThisWeekFromDB gamesToDisplay={gamesToDisplay} />
    </div>
  );
}

// getStaticProps - fetches games from DB
// pass as prop to ThisWeekFromDB
export const getServerSideProps = async () => {
  const res = await fetch(process.env.BACKEND_URL + "/api/nominatedList");
  const data = await res.json();
  const gamesToDisplay = data.allGames;

  return {
    props: { gamesToDisplay },
  };
};
