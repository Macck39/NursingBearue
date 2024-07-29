import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Routers from "../../routes/Routers";

const Layout = () => {
  const location = useLocation();
  const isLoginRoute =
    location.pathname === "/login" || location.pathname === "/admindashboard";

  return (
    <>
      {!isLoginRoute && <Navbar />}
      <main>
        <Routers />
      </main>
      {!isLoginRoute && <Footer />}
    </>
  );
};

export default Layout;
