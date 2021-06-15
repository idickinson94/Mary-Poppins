import Footer from "./Footer";
import Navbar from "./Nav";
import Head from "next/head";
import { useState, useEffect } from "react";
import AnimatedPoppins from "./buildings";

const Layout = ({ children, pageTitle, description, ...props }) => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [children]);

  return (
    <div className="content">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      {children}
      <AnimatedPoppins />
      <Footer />
    </div>
  );
};

export default Layout;
