import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SinglePropertyDetails from "./SinglePropertyDetails";

const SinglePropertyViewing = () => {
  return (
    <div>
      <Navbar />
      <SinglePropertyDetails />
      <Footer />
    </div>
  );
};

export default SinglePropertyViewing;
