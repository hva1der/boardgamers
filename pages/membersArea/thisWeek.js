// Page with list of games with info, pics, video and list of allocated players.
// Also GM/admin access panel on top left

import ThisWeekFromDB from "@/components/ThisWeekFromDB";

// COMPONENT: Parent to ThisWeekFromDB
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
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/nominatedList");
  const data = await res.json();
  const gamesToDisplay = data.allGames;

  return {
    props: { gamesToDisplay },
  };
};
