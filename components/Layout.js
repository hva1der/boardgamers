import Navbar from "./Navbar";
import Image from "next/image";

// Layout component to reliably display the navbar and header image on all pages
const Layout = ({ children }) => {
  return (
    <>
      {/* Banner image goes here (?) */}
      <Image src="/darth.jpg" width={1520} height={150} alt="darth image" />
      <Navbar />
      <div> {children}</div>
    </>
  );
};

export default Layout;
