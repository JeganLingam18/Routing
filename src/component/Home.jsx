import React from "react";
import { Link, Outlet } from "react-router-dom";
function Home() {
  return (
    <>
      <div>Home</div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        assumenda, autem tenetur expedita earum tempore eaque rerum deserunt
        explicabo sequi repellat delectus vel architecto, accusantium nobis qui
        ducimus ratione. Aspernatur.
      </p>
      <Link to={"own"}>Own Page</Link>
      <Outlet />
    </>
  );
}

export default Home;
