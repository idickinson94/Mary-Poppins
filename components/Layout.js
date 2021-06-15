import Footer from "./Footer";
import Navbar from "./Nav";
import Head from "next/head";
import { useState, useEffect } from "react";
import AnimatedPoppins from "./buildings";

const Layout = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setNavOpen(false);
  }, [children]);

  return (
    <div className="content">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={twitterHandle} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={currentURL} key="ogurl" />
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content={siteName} key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      {children}
      <AnimatedPoppins />
      <Footer />
    </div>
  );
};

export default Layout;
