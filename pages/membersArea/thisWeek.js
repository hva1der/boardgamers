// Page with list of games with info, pics, video and list of allocated players.
// Also GM/admin access panel on top left

import ThisWeekFromDB from "@/components/ThisWeekFromDB";
import Link from "next/link";

// COMPONENT: Parent to ThisWeekFromDB
export default function ThisWeek({ gamesToDisplay }) {
  return (
    <div>
      {/* Admin area access - style to appear on left? In future make this into a Component that can appear on different pages with different options  */}
      <div>
        <h3>GM area</h3>
        <Link href="http://localhost:3000/membersArea/admin/allocateGames">
          Allocate Games
        </Link>
      </div>
      {/* Main content - list of games with info, pics, video and list of allocated players. Takes 
      'gamesToDisplay' as prop.  */}
      <ThisWeekFromDB gamesToDisplay={gamesToDisplay} />
    </div>
  );
}

// getStaticProps - fetches games from DB
// pass as prop to ThisWeek
export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/gamesList");
  const data = await res.json();
  const gamesToDisplay = data.allGames;

  return {
    props: { gamesToDisplay },
  };
};
