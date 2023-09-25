import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ArtistCard from "../../components/ArtistCard/ArtistCard";

const Artist = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <ArtistCard />
      <Footer />
    </div>
  );
};

export default Artist;
