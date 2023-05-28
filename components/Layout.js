import Navbar from "./Navbar";
import BannerAndLogin from "./BannerAndLogin";

// Layout component to reliably display the navbar, header image, and login functionality on all pages
const Layout = ({ children }) => {
  return (
    <>
      <BannerAndLogin />
      <Navbar />
      <div> {children}</div>
    </>
  );
};

export default Layout;
