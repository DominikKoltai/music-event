import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";

const Event = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default Event;
