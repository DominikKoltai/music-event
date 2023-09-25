import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Content from "../../components/Content/Content";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <Header />
      <Content />
      <Footer />
    </div>
  )
};

export default Home;
