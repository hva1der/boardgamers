import Navbar from "./Navbar";
import Image from "next/image";
import BannerAndLogin from "./BannerAndLogin";

// Layout component to reliably display the navbar and header image on all pages
const Layout = ({ children }) => {
  return (
    <>
      {/* Banner and Login component */}
      <BannerAndLogin />
      <Navbar />
      <div> {children}</div>
    </>
  );
};

export default Layout;
