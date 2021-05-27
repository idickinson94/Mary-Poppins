import Footer from "./Footer";
import Navbar from "./Nav";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [children]);

  return (
    <div className="content">
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
