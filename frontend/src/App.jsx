/* eslint-disable react/no-unstable-nested-components */
import React from "react";
// import { Outlet } from "react-router-dom";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import LeftBar from "./components/LeftBar";
// import RightBar from "./components/RightBar";

export default function App() {
  // function Layout() {
  //   return (
  //     <div>
  //       <Navbar />
  //       <div style={{ display: "flex" }}>
  //         <LeftBar />
  //         <Outlet />
  //         <RightBar />
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div>
      {/* <Layout /> */}
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
