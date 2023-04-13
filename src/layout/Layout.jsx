import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <div className="bg-white min-h-screen min-w-screen">
      <Navbar />
      <main className=" overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
