import React from "react";
import { Link, Outlet } from "react-router-dom";
import Rout from "../Rout";

function Rootlayout() {
  return (
    <div>
      <nav>
        <Link to={"home"}>Home</Link>
        <Link to={"contact"}>Contact</Link>
        <Link to={"about"}>About</Link>
      </nav>
      <Outlet />
      <Rout />
    </div>
  );
}

export default Rootlayout;
