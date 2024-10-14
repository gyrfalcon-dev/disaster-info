import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function Event() {
  const { id } = useParams();
  return (
    <div>
      <Navbar></Navbar>
      {id}
    </div>
  );
}

export default Event;
